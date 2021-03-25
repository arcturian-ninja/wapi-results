import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectResultComponent } from './subject-result/subject-result.component';
import { ExamdataService } from './services/examdata.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ScoreComponent } from './score/score.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectResultComponent,
    ScoreComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [
    ExamdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
