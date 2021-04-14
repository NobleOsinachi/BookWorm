import { Component } from "@angular/core";

export enum Grades {
  A, B, C, D, E, F
}
// @Component({})
export class GradeComponent {
  static Grade = function
    /*
    70-100 A
    60-69 B
    50-59 C
    45-49 D
    40-44 E
    00-39 F
    */( grade: number ) {
    if ( grade >= 70 && grade <= 100 ) return Grades.A;
    else if ( grade >= 70 && grade <= 100 ) return Grades.B;
    else if ( grade >= 50 && grade < 70 ) return Grades.C;
    else if ( grade >= 45 && grade < 50 ) return Grades.D;
    else if ( grade >= 40 && grade < 45 ) return Grades.E;
    else if ( grade >= 0 && grade < 40 ) return Grades.F;
    else return null;

  };
}
