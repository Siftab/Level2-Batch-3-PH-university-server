import { Tcourse } from "./course.interface"
import { Course } from "./course.model"




const createCourse = async(payload:Tcourse)=>{

    const result = await Course.create(payload)

    return result
}
const getAllCourseFromDb = async()=>{

    const result = await Course.find()

    return result
}
const getSingleCourseFromDb = async(id:string )=>{

    const result = await Course.findById(id)

    return result
}
const deleteSingleCourseFromDb = async(id:string )=>{

    const result = await Course.findByIdAndUpdate(id
        ,{isDeleted: true},{
            new:true
        }
    )

    return result
}





export const CourseServices ={
    createCourse,
    getAllCourseFromDb,
    getSingleCourseFromDb,
    deleteSingleCourseFromDb

}   