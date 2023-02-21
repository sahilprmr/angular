import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent {
  udataform = new FormGroup({
    fname :new FormControl(),
    mname : new FormControl(),
    lname : new FormControl(),
    fullname : new FormControl(),
  });




}
