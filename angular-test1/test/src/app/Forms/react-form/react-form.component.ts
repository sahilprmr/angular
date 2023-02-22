import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type NewType = FormGroup;

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit{
  udataform:FormGroup;
  @Input()
  genders =['Male','Female'];
  ngOnInit(){
    this.udataform = new FormGroup({
    'fname' :new FormControl(),
    'mname' : new FormControl(),
    'lname' : new FormControl(),
    'fulltextarea' : new FormControl(),
    'gender' : new FormControl(''),
    'dancing':new FormControl(),
    'swiming':new FormControl(),
    'singing':new FormControl(),
    'football':new FormControl(),
    'submit':new FormControl(),
    'reset':new FormControl(),
    'clear':new FormControl(),
    'gaming':new FormControl(),

  });
  }
  onSubmit(){
    console.log(this.udataform);
    
  }
  



}
