import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  cls= false;
  @Input()
homeNumber:any;
onSubmit(){
  console.log(this.homeNumber);
  this.cls = true;
}
clear()
{
  this.homeNumber = '';
}
}