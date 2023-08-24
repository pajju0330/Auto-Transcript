import * as React from 'react';
import Appbar from './Utils/Appbar';
import './AdminHome.css';
import * as API from '../API/FormRequest';
import {useNavigate} from 'react-router-dom'
import ShowTranscript from './ShowTranscript';

function AdminHome() {  
  const [applicants, setApplicants] = React.useState([]);
  const [fileUpload, setFileupload] = React.useState();
  const [jsonData, setJsonData] = React.useState([]);
  const [clickedId, setClickedId] = React.useState(null);
  const [geneTranscript, setGeneTranscript] = React.useState(false);
  const [singleApplicant, setSingleApplicant] = React.useState(null); // [0] for single applicant
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsBinaryString(file);
  };

  const generateTranscript = (_id) => {
    setClickedId(_id);
    setGeneTranscript(true);
  };

  const fetch = async () => {
    const res = await API.getAllApplicants();
    console.log(res.data.applicants);
    setApplicants(res.data.applicants);
  };

  React.useEffect(() => {
    fetch();
  }, []);


  var count = 0;
  
  if (geneTranscript) {
    return (
      <>
        <ShowTranscript
          applicant={applicants.find(applicant => applicant._id === clickedId)}
          _id={clickedId}
          setGeneTranscript={setGeneTranscript}
        />
      </>
    );
  } else {
    if (applicants.length === 0) {
      return (
        <>
          <Appbar />
          <div className='mainDiv'>
            <div className='home'>
              <div className='home-content-empty'>
                <div>No Request Pending</div>
                <div className='subtitle'>New request will be shown here</div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Appbar />
          <div className='mainDiv'>
            <div className='home'>
              <div className='home-container'>
                <div className='home-content-heading'>
                  <div className='subtitle sub-one'>Sr. No. </div>
                  <div className='subtitle sub-one'>PRN </div>
                  <div className='subtitle sub-two'>Name</div>
                  <div className='subtitle sub-one'>Branch</div>
                  <div className='subtitle sub-one'>Year of Study</div>
                  <div className='subtitle sub-one'>Verification</div>
                  <div className='subtitle sub-one'>Status</div>
                </div>
                {applicants.map((applicant) => {
                  return (
                    <div
                      className='home-content'
                      onClick={() => navigate(`/admin/transcript/firstpage/${applicant._id}`)}
                    >
                      <div className='subtitle sub-one'>{++count} </div>
                      <div className='subtitle sub-one'>{applicant.prn} </div>
                      <div className='subtitle sub-two'>
                        {applicant.firstName} {applicant.lastName}
                      </div>
                      <div className='subtitle sub-three'>{applicant.branch}</div>
                      <div className='subtitle sub-three'>{applicant.yos}</div>
                      <div className='subtitle sub-three'>
                        <i>{applicant.status}</i>
                      </div>
                      <div className='subtitle sub-three'>
                        <button className='clearBtn'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-check-circle'
                          >
                            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                            <polyline points='22 4 12 14.01 9 11.01'></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default AdminHome;
