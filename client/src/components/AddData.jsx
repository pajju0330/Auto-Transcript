import React, { useEffect, useState } from "react";
import Appbar from "./Utils/Appbar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import * as XLSX from 'xlsx/xlsx.mjs';
import * as API from '../API/courseRequest'

const AddData = () => {
	const [status,setStatus] = useState([
		{year:1,status:'Missing'},
		{year:2,status:'Missing'},
		{year:3,status:'Missing'},
		{year:4,status:'Missing'},
	])

	const handleFileChange = async (year, e) => {
		const file = e.target.files[0];
		let temp = [...status];
		temp[year-1].status = 'Uploaded';
		setStatus(temp);
		if (file) {
		  try {
			const workbook = XLSX.read(await file.arrayBuffer(), { type: 'array' });
			const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
			const res = await API.insertManyCourses(data);
			console.log(res.data);
		  } catch (error) {
			console.error('Error converting Excel to JSON:', error);
		  }
		}
	};

	const setStatusFunction = async() =>{
		const res = await API.verifyCourse();
		console.log(res.data);
		setStatus([...res.data])
	}

	useEffect(()=>{
		setStatusFunction();
	})
	return (
		<>
			<Appbar />
			<div className='mainDiv'>
				<div className='home'>
					<div className='home-container'>
						<div className='home-content-heading'>
							<div className='subtitle sub-one'>Sr. No.</div>
							<div className='subtitle sub-one'>Year</div>
							<div className='subtitle sub-one'>Upload</div>
							<div className='subtitle sub-one'>Status</div>
						</div>
						<div className='home-content-heading'>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								1
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								First Year
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								<input
									// ref={fileInputRef}
									type='file'
									id="1"
									style={{
										opacity: 0,
										width:'6rem',
										position: "absolute",
										cursor: "pointer",
									}}
									onChange={(e) => handleFileChange(1, e)}
								/>
								<FileUploadIcon style={{ cursor: "pointer" }} />
							</div>
							<div className='subtitle sub-one' style={{ color:status[0].status === 'Uploaded' ? 'green' : '#7c949e' }}>
								{status[0].status}
							</div>
						</div>
						<div className='home-content-heading'>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								2
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								Second Year
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								<input
									// ref={fileInputRef}
									type='file'
									id="2"
									style={{
										opacity: 0,
										width:'6rem',
										border:'2px solid black',
										position: "absolute",
										cursor: "pointer",
									}}
									onChange={(e) => handleFileChange(2, e)}
								/>
								<FileUploadIcon style={{ cursor: "pointer" }} />
							</div>
							<div className='subtitle sub-one' style={{ color:status[1].status === 'Uploaded' ? 'green' : '#7c949e' }}>
								{status[1].status}
							</div>
						</div>
						<div className='home-content-heading'>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								3
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								Third Year
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								<input
									// ref={fileInputRef}
									type='file'
									id="3"
									style={{
										opacity: 0,
										position: "absolute",
										cursor: "pointer",
									}}
									onChange={(e) => handleFileChange(3, e)}
								/>
								<FileUploadIcon style={{ cursor: "pointer" }} />
							</div>
							<div className='subtitle sub-one' style={{ color:status[2].status === 'Uploaded' ? 'green' : '#7c949e' }}>
								{status[2].status}
							</div>
						</div>
						<div className='home-content-heading'>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								4
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								Forth Year
							</div>
							<div className='subtitle sub-one' style={{ color: "#7c949e" }}>
								<input
									// ref={fileInputRef}
									type='file'
									id="4"
									style={{
										opacity: 0,
										position: "absolute",
										cursor: "pointer",
									}}
									onChange={(e) => handleFileChange(4, e)}
								/>
								<FileUploadIcon style={{ cursor: "pointer" }} />
							</div>
							<div className='subtitle sub-one' style={{ color:status[3].status === 'Uploaded' ? 'green' : '#7c949e' }}>
								{status[3].status}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddData;
