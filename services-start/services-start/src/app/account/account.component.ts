import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { Service2 } from '../service/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[Service2]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private logged : Service2, private accountService : AccountService){

  }
   
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.logged.logStatusChange(status);
    this.accountService.updateStatus(this.id,status); 
  }
}
