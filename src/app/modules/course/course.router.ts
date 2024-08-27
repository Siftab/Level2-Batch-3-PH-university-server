import express from "express"
import { CourseControllers } from "./course.controllers"



const router = express.Router()



router.get("/",CourseControllers.getAllCourseFromDb)
router.get("/:id",CourseControllers.getSingleCourseFromDb)
router.post("/create-course",CourseControllers.createACourse)
router.delete("/delete-course",CourseControllers.deleteCourseFromDb)




export const courseRouter = router;