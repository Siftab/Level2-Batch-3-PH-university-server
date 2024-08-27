import { z } from "zod";




const PreRequisiteCourseValidation  = z.object({
    course:z.string(),
    isDeleted:z.boolean()
})


const createCourseValidation = z.object({
    body:z.object({
        title:z.string(),
        prefix:z.string(),
        course:z.number(),
        credit:z.number(),
        PreRequisiteCourses:z.array(PreRequisiteCourseValidation )
    })
})


export const courseValidation = {
    createCourseValidation,PreRequisiteCourseValidation
}