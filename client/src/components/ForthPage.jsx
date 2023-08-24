import React, { useEffect, useState } from "react";
import PageTemplate from "./PageTemplate";
import * as API from "../API/courseRequest";
import * as FAPI from "../API/FormRequest";
import { useParams } from "react-router-dom";

const ForthPage = () => {
	const [courseDetails, setCourseDetails] = useState([]);
	const { id } = useParams();
	const [name, setName] = React.useState("");
	const [prn, setPrn] = React.useState("");
	const [POS, setPOS] = React.useState("");
	const [completion, setCompletion] = React.useState("");
	const next = "fifthpage";
	const getCourseDetails = async () => {
		try {
			const res = await API.getAllCourses();
			console.log(res.data);
			setCourseDetails(res.data);
		} catch (err) {
			console.error(err.message);
		}
	};
	const getApplicant = async () => {
		try {
			const data = { _id: id };
			const res = await FAPI.getSingleApplicant(data);
			setName(`${res.data.applicant.firstName} ${res.data.applicant.lastName}`);
			setPrn(res.data.applicant.prn);
			setPOS(`${res.data.applicant.yos - 4}-${res.data.applicant.yos}`);
			setCompletion(`May 	${res.data.applicant.yos}`);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getCourseDetails();
		getApplicant();
	}, []);

	return (
		<div>
			{courseDetails.length > 0 ? (
				<PageTemplate
					courseDetails={courseDetails}
					name={name}
					prn={prn}
					POS={POS}
					completion={completion}
					next={next}
                    Y={"1"}
				/>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ForthPage;
