import { z } from "zod";




const preReuisiteCourseValidation  = z.object({
    course:z.string(),
    isDeleted:z.boolean()
})


const createCourseValidation = z.object({
    body:z.object({
        title:z.string(),
        prefix:z.string(),
        course:z.number(),
        credit:z.number(),
        preReuisiteCourses:z.array(preReuisiteCourseValidation )
    })
})


export const courseValidation = {
    createCourseValidation,preReuisiteCourseValidation
}