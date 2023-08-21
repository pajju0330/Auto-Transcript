import React, { useEffect } from "react";
import "./FirstPage.css"; // You can create a CSS file for styling
import wcelogo from "./wcelogo.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useParams } from "react-router-dom";
import * as API from "../API/FormRequest";
import { useNavigate } from "react-router-dom";

function FirstPage({ language, result, marks }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [name, setName] = React.useState("");
	const [prn, setPrn] = React.useState("");
	const [POS, setPOS] = React.useState("");
	const [completion, setCompletion] = React.useState("");

	const getApplicant = async () => {
		try {
			const data = { _id: id };
			const res = await API.getSingleApplicant(data);
			setName(`${res.data.applicant.firstName} ${res.data.applicant.lastName}`);
			setPrn(res.data.applicant.prn);
			setPOS(`${res.data.applicant.yos - 4}-${res.data.applicant.yos}`);
			setCompletion(`May 	${res.data.applicant.yos}`);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getApplicant();
	}, []);

	language = "English";
	result = "Pass";
	marks = [8.5, 8.7, 9.0, 8.8, 8.2, 8.6, 8.9, 8.4];
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	const currentDate = `${day}/${month}/${year}`;

	return (
		<div className='firstpage-container'>
			<div
				className='header'
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}>
				<div>
					{" "}
					<img src={wcelogo} className='logo' alt='' />
				</div>
				<div
					style={{
						marginLeft: "1rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{" "}
					<h1 style={{ margin: "2px", color: "red" }}>
						Walchand College of Engineering
					</h1>
					<h4 style={{ margin: "2px", color: "red" }}>
						(Government-Aided Autonomous Institute)
					</h4>
					<h5 style={{ margin: "2px" }}>
						Vishrambag, SANGLI - 416451 (M.S. ) India
					</h5>
					<h6 style={{ margin: "2px" }}>Website : www.walchandsangli.ac.in</h6>
				</div>
			</div>
			<div className='contactDetails'>
				<div style={{ display: "flex", alignItems: "center" }}>
					<PhoneInTalkIcon style={{ color: "red", marginRight: "0.5rem" }} />{" "}
					+91-233-230-3433
				</div>
				<div>
					<span style={{ color: "red" }}>Email: </span>info@walchandsangli.ac.in
				</div>
			</div>
			<div className='transcriptDetails'>
				<div style={{ display: "flex", alignItems: "center" }}>
					Ref: WCE/TRANSCRIPT/2023/1023
				</div>
				<div>Date: {currentDate}</div>
			</div>
			<div className='transcriptName'>Official Transcript Certificate</div>
			<div className='table-container'>
				<table className='custom-table'>
					<thead>
						<tr>
							<th colSpan='8'>Student Information</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan='2'>Name of student</td>
							<td colSpan='2' contenteditable='true'>
								{name}
							</td>
							<td colSpan='2'>PRN</td>
							<td colSpan='2' contenteditable='true'>
								{prn}
							</td>
						</tr>
						<tr>
							<td colSpan='2'>Period of Study</td>
							<td colSpan='2' contenteditable='true'>
								{POS}
							</td>
							<td colSpan='2'>Month And Year of Completion</td>
							<td colSpan='2' contenteditable='true'>
								{completion}
							</td>
						</tr>
						<tr>
							<td colSpan='2'>Medium of Instruction</td>
							<td colSpan='2' contenteditable='true'>
								{language}
							</td>
							<td colSpan='2'>Result</td>
							<td colSpan='2' contenteditable='true'>
								{result}
							</td>
						</tr>
						<tr>
							<td colSpan={2}>First Year</td>
							<td colSpan={2}>Second Year</td>
							<td colSpan={2}>Third Year</td>
							<td colSpan={2}>Fourth Year</td>
						</tr>
						<tr>
							<td>Sem-I</td>
							<td>Sem-II</td>
							<td>Sem-I</td>
							<td>Sem-II</td>
							<td>Sem-I</td>
							<td>Sem-II</td>
							<td>Sem-I</td>
							<td>Sem-II</td>
						</tr>
						<tr>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
							<td contenteditable='true'>SPI</td>
						</tr>
						<tr>
							{marks.map((mark, index) => (
								<td contenteditable='true' key={index}>
									{mark}
								</td>
							))}
						</tr>
						<tr>
							<td colSpan={8}> About The Collge Program</td>
						</tr>
						<tr>
							<td colSpan={8}>
								{" "}
								Walchand College of Engineering Sangli (WCE), established in
								1947, is one of the oldest and premier engineering institutions
								in India. It is a Govt. aided autonomous institute catering
								nearly 2500 students for UG, PG and Ph.D. programs in various
								disciplines of engineering. With a rich history of over 70 years
								and a beautiful campus of over 90-acres, the institute is
								providing unique learning experiences for the students across a
								spectrum of engineering disciplines.
								<br /> The institute is affiliated to Shivaji University,
								Kolhapur and is approved by AICTE, New Delhi. It is also given
								autonomous status by UGC since 2007. It has all its programs NBA
								accredited and also has received 'A' grade from National
								Assessment and Accreditation Council (NAAC), Bangalore. The
								institute has 6 UG and 10 PG programs. It also has Ph.D.
								programs under Shivaji University, National Doctoral Fellowship
								of AICTE and under Quality Improvement Program (QIP) scheme of
								Ministry of Human Resource Development (MHRD).
								<br /> The curriculum of UG programme provides i) broad based
								knowledge; ii) quality content of courses; iii) academic
								flexibility; iv) scope for multi-disciplinary learning
								activities; v) opportunity for industry oriented projects. The
								curriculum designed is in line with the out-come based education
								and has courses on Humanities, Social science and Management,
								Basic sciences including mathematics, Engineering science,
								Professional core, Professional elective, Open elective, Project
								work, Seminar, and Internship in industry.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div
				style={{
					backgroundColor: "white",
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<button
					style={{
						width: "10rem",
						height: "2rem",
						marginBottom: "1rem",
						marginRight: "1rem",
						backgroundColor: "#333",
						color: "white",
						cursor: "pointer",
					}}
					onClick={() => navigate(`/admin/transcript/secondpage/${id}`)}
					className='next-btn'>
					Next
				</button>
			</div>
		</div>
	);
}

export default FirstPage;
