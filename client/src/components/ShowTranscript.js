import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import * as api from '../API/FormRequest'

const ShowTranscript = ({ applicant,  setGeneTranscript }) => {
  // Extracting URLs from the candidateName.ReportDetails object
  const pdfUrls = applicant.ReportDetails.map(report => report.imageURL);
  const updateStatus = async (status) => {
    applicant.status = status
    const data = {
      _id: applicant._id,
      status
    }
    const res = await api.updateApplicantStatus(data);
    console.log(res.data);
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
            setGeneTranscript(false);
          }}
          className='submitbtn1'
        >
          Verify
        </button>
        <button
          onClick={() => {
            updateStatus('Rejected')
            setGeneTranscript(false);
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
