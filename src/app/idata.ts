import { ISubject } from './isubject';

export interface IData {
  student_name: string;
  student_admission_number: string;
  student_photo: string;
  exam_name: string;
  class_name: string;
  principals_remarks: string;
  class_teachers_remarks: string;
  mean_grade: string;
  overall_position: any;
  stream_position: any;
  mean_marks: any;
  subject_results: Array<ISubject>;
  student_performance_over_time: Array<object>;
}
