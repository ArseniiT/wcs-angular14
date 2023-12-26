import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: User[] = [];

  userName = new FormControl('');
  userEmail = new FormControl('');
  userPassword = new FormControl('');
  userAddress = new FormControl('');

  ngOnInit(): void {
    this.users.push(new User(
      'Luna Nightshade',
      'luna.night@example.com',
      'moonlight123',
      '456 Celestial Blvd, Star City'
    ));
  }

  onSubmit() {
    const name =this.userName.value;
    const mail = this.userEmail.value;
    const password = this.userPassword.value;
    const address = this.userAddress.value;

    if(!name || !mail || !password || !address) return;

    this.users.unshift(new User(
      name,
      mail,
      password,
      address,
    ));
  }
}
