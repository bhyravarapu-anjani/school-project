import { Component } from '@angular/core';
import { StudentsdataService } from '../studentsdata.service';

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrls: ['./students-data.component.css']
})
export class StudentsDataComponent {
  public students:any=[];
  constructor(private _studentService:StudentsdataService){
    this._studentService.createStudentData().subscribe(
      (data:any)=>{
        this.students=data;

      },
      (err:any)=>{
        alert("invalid data")
      }
    )
  }
  

}
