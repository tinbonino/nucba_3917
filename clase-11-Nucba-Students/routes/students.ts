import { Router } from "express";
import { createStudent, getStudentByDNI, getStudents } from "../controllers/students";

const router = Router();

router.get("/",getStudents);

router.get("/:dni",getStudentByDNI);

router.post("/",createStudent);

// router.put("/:dni",updateStudent);

// router.patch("/:dni",updateStudent);

// router.delete("/:dni",deleteStudent);

export default router;