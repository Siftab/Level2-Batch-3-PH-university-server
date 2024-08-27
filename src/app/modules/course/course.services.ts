import { query } from "express"
import QueryBuilder from "../../builder/QueryBuilder"
import { Tcourse } from "./course.interface"
import { Course } from "./course.model"
import { courseSearchableFields } from "./course.constants"




const createCourse = async(payload:Tcourse)=>{

    const result = await Course.create(payload)

    return result
}
const getAllCourseFromDb = async(query:Record<string,unknown>)=>{


    const coursequery = new QueryBuilder(Course.find().populate("PreRequisiteCourse.course")
    ,query )
    .search(courseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()


    const result = await coursequery.modelQuery 

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