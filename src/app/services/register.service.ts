import {Injectable} from '@angular/core';
import {Users} from '../classes/Users';
@Injectable()
export class RegisterService{
    lastId:number = 0;
    users:Users[] = [];
    constructor()
    {}
    registerUser(user: Users): RegisterService {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.users.push(user);
    return this;
  }
    
}