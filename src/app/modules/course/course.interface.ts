import { Types } from "mongoose"


export type Tcourse  ={
    title : string ,
    prefix :string,
    code :number,
    credits : number,
    preReuisiteCourses:[ ]
}
export type TPreRequisiteCourses ={
    course: Types.ObjectId,
    isDeleted: boolean
}