import { Component } from '@angular/core';
import {Users} from '../../classes/Users';
import {RegisterService} from '../../services/register.service';
@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  providers:[RegisterService]
})
export class RegisterComponent {
  componentTitle = 'Register';
  newRegistration:Users = new Users();
  constructor(private registrationService: RegisterService)
  {}
  registerUser()
  {
    this.registrationService.registerUser(this.newRegistration);
    this.newRegistration = new Users();
  }
}
