import { Types } from "mongoose"


export type TPreRequisiteCourses ={
    course: Types.ObjectId,
    isDeleted: boolean
}

export type Tcourse  ={
    title : string ,
    prefix :string,
    code :number,
    credits : number,
    PreRequisiteCourse:[TPreRequisiteCourses ],
    isDeleted ?: boolean
}
 