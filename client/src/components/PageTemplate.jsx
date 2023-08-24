	import React, { useEffect } from "react";
	import "./PageTemplate.css"; // You can create a CSS file for styling
	import wcelogo from "./wcelogo.png";
	import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
	import { useParams } from "react-router-dom";
	import * as API from "../API/courseRequest";
	import { useNavigate } from "react-router-dom";
	import axios from "axios";

	const PageTemplate = ({ courseDetails, name ,prn, POS, completion, next, Y }) => {
		console.log(courseDetails);
		const navigate = useNavigate();
		const { id } = useParams();

		const language = "English";
		const result = "Pass";
		const marks = [8.5, 8.7, 9.0, 8.8, 8.2, 8.6, 8.9, 8.4];
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");

		const currentDate = `${day}/${month}/${year}`;
		return (
			<div>
				<div className='second-page-container'>
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
							<h6 style={{ margin: "2px" }}>
								Website : www.walchandsangli.ac.in
							</h6>
						</div>
					</div>
					<div className='second-page-contactDetails'>
						<div style={{ display: "flex", alignItems: "center" }}>
							<PhoneInTalkIcon style={{ color: "red", marginRight: "0.5rem" }} />{" "}
							+91-233-230-3433
						</div>
						<div>
							<span style={{ color: "red" }}>Email: </span>
							info@walchandsangli.ac.in
						</div>
					</div>
					<div className='second-page-transcriptDetails'>
						<div style={{ display: "flex", alignItems: "center" }}>
							Ref: WCE/TRANSCRIPT/2023/1023
						</div>
						<div>Date: {currentDate}</div>
					</div>
					<div className='second-page-transcriptName'>Examination Section</div>
					<div className='second-page-candidateName'>Name: {name}</div>
					<div className='second-page-seatNo'>Examination Seat Number: {prn}</div>
					<div className='second-page-branchName'>
						B.Tech Information Technology
					</div>
					<div className='second-page-table-container'  style={{backgroundColor:'#fff'}} >
						<table className='second-page-custom-table' >
							<thead>
								<tr>
									<th rowSpan={2}> Course code </th>
									<th className='second-page-title' rowSpan={2} colSpan={4}>
										Course Title
									</th>
									<th colSpan={3}>Hours Per Week </th>
									<th rowSpan={2}>Credits</th>
									<th rowSpan={2}>Grade</th>
								</tr>
								<tr>
									<td>Lecture</td>
									<td>Tutorial</td>
									<td>Practical</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowSpan='1' colSpan='10'>
									{Y === "1"?"First":Y==="2"?"Second":Y==="3"?"Third":"Forth"} Year:(2010-2011) SEM-I
									</td>
								</tr>
								{courseDetails?.map((course) => {
									const {
										CourseCode,
										CourseTitle,
										Lecture,
										Tutorial,
										Practical,
										Credits,
										Semester,
										Year
									} = course;
									if(Year === Y && Semester === "1"){
										console.log(Year, Y);
										return (
											<tr>
												<td  style={{fontWeight:'100'}}>{CourseCode}</td>
												<td colSpan='4'  style={{fontWeight:'100'}}>
													{CourseTitle}
												</td>
												<td  style={{fontWeight:'100'}}>{Lecture}</td>
												<td  style={{fontWeight:'100'}}>{Tutorial}</td>
												<td  style={{fontWeight:'100'}}>{Practical}</td>
												<td  style={{fontWeight:'100'}}>{Credits}</td>
												<td  style={{fontWeight:'100'}}>B</td>
											</tr>
										);
									}
								})}
								<tr>
									<td rowSpan='1' colSpan='10'>
									{Y === "1"?"First":Y==="2"?"Second":Y==="3"?"Third":"Forth"} Year:(2010-2011) SEM-II
									</td>
								</tr>
								{courseDetails?.map((course) => {
									const {
										CourseCode,
										CourseTitle,
										Lecture,
										Tutorial,
										Practical,
										Credits,
										Semester,
										Year
									} = course;
									if(Year === Y && Semester === "2"){
										return (
											<tr>
												<td  style={{fontWeight:'100'}}>{CourseCode}</td>
												<td colSpan='4'  style={{fontWeight:'100'}}>
													{CourseTitle}
												</td>
												<td  style={{fontWeight:'100'}}>{Lecture}</td>
												<td  style={{fontWeight:'100'}}>{Tutorial}</td>
												<td  style={{fontWeight:'100'}}>{Practical}</td>
												<td  style={{fontWeight:'100'}}>{Credits}</td>
												<td  style={{fontWeight:'100'}}>B</td>
											</tr>
										);
									}
								})}
							</tbody>
						</table>
					</div>

					<div className='second-page-table-container'  style={{backgroundColor:'#fff'}}>
						<table
							border={2}
							className='second-page-custom-table'
							style={{ textAlign: "center" }}>
							<tr>
								<th colSpan={7}>Performance</th>
							</tr>
							<tr>
								<th colSpan={2}>{Y === "1"?"First":Y==="2"?"Second":Y==="3"?"Third":"Forth"} Year Semester-I Courses</th>
								<th colSpan={2}>{Y === "1"?"First":Y==="2"?"Second":Y==="3"?"Third":"Forth"} Year Semester-II Courses</th>
								<th colSpan={2}>Cumulative</th>
							</tr>
							<tr>
								<td>Credits</td>
								<td>SPI</td>
								<td>Credits</td>
								<td>SPI</td>
								<td>Credits Earned</td>
								<td>CPI</td>
							</tr>
							<tr>
								<td>25</td>
								<td>7.80</td>
								<td>23</td>
								<td>8.09</td>
								<td>48</td>
								<td>7.94</td>
							</tr>
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
							onClick={() => navigate(`/admin/transcript/${next}/${id}`)}
							className='second-page-next-btn'>
							Next
						</button>
					</div>
				</div>
			</div>
		);
	};

	export default PageTemplate;
