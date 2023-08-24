import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function AddressForm({ onFormDataChange }) {
	const [formData, setFormData] = React.useState({
		branch: "Information Technology",
	});
	const [provCerti, setProvCerti] = React.useState("yes");
  const [marksheet, setMarksheet] = React.useState("yes");
  const [degreeCerti, setDegreeCerti] = React.useState("yes");
	const handleChange = (e) => {
		if (e.target.name === "provisionalCertificate") {
			if (e.target.value === "yes") setProvCerti("no");
			else setProvCerti("yes");
			setFormData((prevFormData) => ({
				...prevFormData,
				[e.target.name]: provCerti,
			}));
			onFormDataChange(formData);
		}else if(e.target.name === "marksheet"){
      if (e.target.value === "yes") setMarksheet("no");
      else setMarksheet("yes");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: marksheet,
      }));
      onFormDataChange(formData);
    }else if(e.target.name === "degreeCertificate"){
      if (e.target.value === "yes") setDegreeCerti("no");
      else setDegreeCerti("yes");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: degreeCerti,
      }));
      onFormDataChange(formData);
    }else {
			setFormData((prevFormData) => ({
				...prevFormData,
				[e.target.name]: e.target.value,
			}));
			onFormDataChange(formData);
		}
	};

	console.log(formData);
	const branches = [
		"Computer Science Engineering",
		"Information Technology",
		"Electronics Engineering",
		"Electrical Engineering",
		"Mechanical Civil",
		"Civil Engineering",
	];
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Student details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='firstName'
						name='firstName'
						label='First name'
						value={formData.firstName}
						onChange={handleChange}
						fullWidth
						autoComplete='given-name'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='lastName'
						name='lastName'
						label='Last name'
						value={formData.lastName}
						onChange={handleChange}
						fullWidth
						autoComplete='family-name'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id='PRN'
						name='prn'
						label='PRN'
						value={formData.PRN}
						onChange={handleChange}
						fullWidth
						autoComplete=''
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<InputLabel id='branch-label'>Branch</InputLabel>
					<Select
						labelId='branch-label'
						id='branch'
						name='branch'
						default='it'
						value={formData.branch} // Assuming you use "branch" as the key in the formData object
						onChange={handleChange}
						label='Branch'
						autoComplete='off'
						variant='standard'>
						{branches.map((branch, index) => (
							<MenuItem key={index} value={branch}>
								{branch}
							</MenuItem>
						))}
					</Select>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id='Email'
						name='email'
						label='Email'
						value={formData.Email}
						onChange={handleChange}
						fullWidth
						autoComplete=''
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						type='number'
						required
						id='yos'
						name='yos'
						label='Year of Study'
						value={formData.yos}
						onChange={handleChange}
						fullWidth
						autoComplete=''
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						type='number'
						id='contactNo'
						name='contactNo'
						label='Contact Number'
						value={formData.contactNo}
						onChange={handleChange}
						fullWidth
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						type='number'
						required
						id='copies'
						name='copies'
						label='Number of copies'
						value={formData.copies}
						onChange={handleChange}
						defaultValue={1}
						fullWidth
						autoComplete='1'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='address'
						name='address'
						label='Address'
						value={formData.address}
						onChange={handleChange}
						fullWidth
						autoComplete='shipping address'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<div>Certificates for which transcripts are reqired:</div>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='marksheet'
								value={marksheet}
								onChange={handleChange}
							/>
						}
						label='Consolidated Marksheet'
					/>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='provisionalCertificate'
								value={provCerti}
								onChange={handleChange}
							/>
						}
						label='Provisional Certificate'
					/>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='degreeCertificate'
								//degreeCertificate
								value={degreeCerti}
								onChange={handleChange}
							/>
						}
						label='Degree Certificate'
					/>
				</Grid>
				<Grid item xs={12}>
					<div>Whether originals of the above certificates are produced:</div>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='yesOrignals'
								value='yes'
								onChange={handleChange}
							/>
						}
						label='Yes'
					/>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='yesOrignals'
								value='no'
								onChange={handleChange}
							/>
						}
						label='No'
					/>
				</Grid>
				<Grid item xs={12}>
					<div>Whether sufficient photocopies are produced:</div>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='yesForPhotos'
								value='yes'
								onChange={handleChange}
							/>
						}
						label='Yes'
					/>
					<FormControlLabel
						control={
							<Checkbox
								color='success'
								name='yesForPhotos'
								value='no'
								onChange={handleChange}
							/>
						}
						label='No'
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
