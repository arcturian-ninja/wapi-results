import { Component, OnInit, Input } from '@angular/core';
import { ISubject } from './../isubject';

@Component({
  selector: 'app-subject-result',
  templateUrl: './subject-result.component.html',
  styleUrls: ['./subject-result.component.scss']
})
export class SubjectResultComponent implements OnInit {

  constructor() { }

  @Input() data: ISubject;

  ngOnInit(): void {
  }

}
