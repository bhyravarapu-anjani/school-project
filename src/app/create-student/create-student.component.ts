import { Component } from '@angular/core';
import {Form,FormControl,FormGroup,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(){}
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      class:new FormControl(),
      fatherName:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressLine:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pin:new FormControl()


        }
      ),
      studentClass:new FormArray([]),
      type:new FormControl(),
      DayScholar:new FormControl(),
      Residential:new FormControl()


    }

  );
  get studentClassFormArray(){
    return this.studentForm.get("studentClass") as FormArray

  }
  add(){
  
    this.studentClassFormArray.push(
      new FormGroup(
        {
          class:new FormControl(),
          percentage:new FormControl(),
        } 
          
      )
    )
  }
  delete(i:number){
    this.studentClassFormArray.removeAt(i)

  }
  submit(){
    console.log(this.studentForm.value)
  }
}
