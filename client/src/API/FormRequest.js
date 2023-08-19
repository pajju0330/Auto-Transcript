import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1/applicants' })

export const createTranscript = (formData) =>
  API.post('/createtranscript', formData)

export const getAllApplicants = () => API.get('/getallapplications')

export const uploadFile = (data) => API.post('/upload', data)

export const getReportDetails = (params) => API.get(`/getreports/${params._id}`)

export const getSingleApplicant = (data) => API.post('/getsingleapplicant', data);

export const updateApplicantStatus = (data) => API.post('/updatestatus', data);
