
import { Injectable } from "@angular/core";

@Injectable( {
    "providedIn": "root",
    
})

export class CoursesService {
  getCourses(): string[] { return ["Angular For Beginners", "NodeJS For Noobs", "Getting started with React"]; }
}


