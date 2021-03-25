import { Component } from '@angular/core';

import { ExamdataService } from './services/examdata.service';
import { IData } from './idata';
import { ISubject } from './isubject';
import { IStudent } from './istudent';
import { IMeans } from './imeans';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'wapiresults';

  constructor(private details: ExamdataService) {
    this.examdata = this.details.fetch();
    this.subjects =  this.examdata.subject_results;
    this.student = {
      student_name: this.examdata.student_name,
      student_photo: this.examdata.student_photo,
      class_name: this.examdata.class_name,
      student_admission_number: this.examdata.student_admission_number
    };
    this.means = {
      deviation: this.examdata.mean_marks.deviation,
      avg_score: this.examdata.mean_marks.avg_score,
      grade: this.examdata.mean_grade
    };
    this.overallPos =  this.examdata.overall_position;

  }

  examdata: IData;
  subjects: Array<ISubject>;
  student: IStudent;
  means: IMeans;
  overallPos: any;
  titleOverallPos  = 'Overall Pos';
  titleScore = 'Scores';
}
