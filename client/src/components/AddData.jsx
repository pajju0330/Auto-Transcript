import React from 'react'
import Appbar from './Utils/Appbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
const AddData = () => {
  return (
    <>
    <Appbar />
    <div className='mainDiv'>
      <div className='home'>
        <div className='home-container'>
          <div className='home-content-heading'>
            <div className='subtitle sub-one'>Sr. No. </div>
            <div className='subtitle sub-one'>Year</div>
            <div className='subtitle sub-one'>Upload</div>
            <div className='subtitle sub-one'>Status</div>
          </div>
          <div className='home-content-heading'>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>1</div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>First Year</div>
            <div className='subtitle sub-one' style={{color:'#7c949e', cursor:'pointer'}}><FileUploadIcon/></div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Missing</div>
          </div>
          <div className='home-content-heading'>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>2</div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Second Year</div>
            <div className='subtitle sub-one' style={{color:'#7c949e', cursor:'pointer'}}><FileUploadIcon/></div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Missing</div>
          </div>
          <div className='home-content-heading'>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>3</div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Third Year</div>
            <div className='subtitle sub-one' style={{color:'#7c949e', cursor:'pointer'}}><FileUploadIcon/></div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Missing</div>
          </div>
          <div className='home-content-heading'>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>4</div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Forth Year</div>
            <div className='subtitle sub-one' style={{color:'#7c949e', cursor:'pointer'}}><FileUploadIcon/></div>
            <div className='subtitle sub-one' style={{color:'#7c949e'}}>Missing</div>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default AddData
