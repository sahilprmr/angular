import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {
genders = ['Female','Male'];
fullname = '';
fname = '';
mname = '';
lname = '';
defaultOption = 'Dancing';
// @Input()
// company =['TechExtensor','Google','Facebook','Simform','Yahoo','Instagram'];
onSubmit(){
  
}
input_fullname(fname:any,mname:any,lname:any){
  this.fname = fname;
  this.lname = lname;
  this.mname = mname;
  this.fullname= fname.value +mname.value + lname.value;
  console.log(this.fname);
  

}
}