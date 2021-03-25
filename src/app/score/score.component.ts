import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  @Input() means: any;
  @Input() title: string;

  marks: number;
  dev: number;
  meanGrade: string;


  ngOnInit(): void {
    this.marks = this.means.avg_score;
    this.dev = this.means.deviation;
    this.meanGrade = this.means.grade;
  }



}
