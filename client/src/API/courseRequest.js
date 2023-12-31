import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1/courses" });

export const insertManyCourses =  (formData) => API.post("/", formData);
export const getAllCourses =  () => API.get("/");
export const verifyCourse =  () => API.get("/verify");

/*
router.post('/', courseController.insertManyCourses);
router.get('/', courseController.getAllCourses);


*/