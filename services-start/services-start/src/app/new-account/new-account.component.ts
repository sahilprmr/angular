import { Serializer } from '@angular/compiler';
import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Service2 } from '../service/login.service';
// import { Service2} from '../service/login.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[Service2,AccountService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string  , status: string}>();
  //Dependency Injection : ADDING SERVICE THROUGH THE CONSTRUCTOR
  constructor(private logginService :Service2, private accountsService:AccountService){
     
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    this.logginService.logStatusChange(accountStatus);
    //Creating new Service The wrong Way 
    // const service = new Service2();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
