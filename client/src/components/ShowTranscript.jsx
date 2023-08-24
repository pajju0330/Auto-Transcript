import React, { useEffect, useState } from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import * as api from '../API/FormRequest'
import { useParams } from "react-router-dom";
import * as API from "../API/FormRequest";

const ShowTranscript = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = useState({});
  const getApplicant = async () => {
		try {
			const data = { _id: id };
			const res = await API.getSingleApplicant(data);
      console.log(res.data.applicant);
      console.log("hellllooo");
      setApplicant(res.data.applicant);
		} catch (err) {
      console.log("heelo");
      console.error(err.message);
		}
	};
  useEffect(()=>{
    console.log("gello");
    getApplicant();
  },[])
  const pdfUrls = applicant?.ReportDetails?.map(report => report.imageURL) || [];
  const updateStatus = async (status) => {
    applicant.status = status
    const data = {
      _id: applicant._id,
      status
    }
    const res = await api.updateApplicantStatus(data);
  }

  return (
    <div className='transcriptMain'>
      <h2 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Transcript for {applicant.firstName} {applicant.lastName}</h2>
      <div className='transcript'>
        <DocViewer documents={pdfUrls.map(url => ({ uri: url }))} pluginRenderers={DocViewerRenderers} />
      </div>
      <div className='cont'>
        <button
          onClick={() => {
            updateStatus('Verified')
          }}
          className='submitbtn1'
        >
          Verify
        </button>
        <button
          onClick={() => {
            updateStatus('Rejected')
          }}
          className='submitbtn2'
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default ShowTranscript;
