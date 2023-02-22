import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  id : number | undefined;
  cls = false;
  @Output()
  homeNumber: any;
  constructor(private val_user : DataService, private route : ActivatedRoute){
  }
  ngOnInit() {
      // const id = this.route.snapshot.params['id'];
      this.route.params.subscribe(
        (params:Params)=>{
          this.id = +params['id'];
        });
      
  }
  onSubmit() {
    // console.log(this.homeNumber);
    this.cls = true;
    this.validateUser(this.homeNumber);
  }
  clear() {
    this.homeNumber = '';
  }

  validateUser(val_user:number){
    this.val_user.validateUser(val_user);
  }
}