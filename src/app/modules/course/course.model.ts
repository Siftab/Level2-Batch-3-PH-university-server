import { model, Schema, Types } from 'mongoose';
import { Tcourse, TPreRequisiteCourses } from './course.interface';



const preReuisiteCoursesSchema =new Schema<TPreRequisiteCourses>({
    course:{
        type: Types.ObjectId,

    },
    isDeleted:{
        type:Boolean,
        default:false

    }
})
const courseSchema = new Schema<Tcourse>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  prefix: {
    type: String,

    trim: true,
    required: true,
  },
  code : {
    type: Number,
    trim: true,
    required: true
  },
  credits : {
    type: Number,
    trim: true,
    required: true
  },
  preReuisiteCourses:[preReuisiteCoursesSchema]
});



export const Course =  model<Tcourse>('Course',courseSchema)
export const PreRequisiteCourses = model<TPreRequisiteCourses>("PreRequisiteCourses",preReuisiteCoursesSchema)


