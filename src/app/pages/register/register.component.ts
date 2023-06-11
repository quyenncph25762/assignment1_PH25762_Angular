import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public users = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  public RegisterClick(): void {
    if (this.users.email.trim() == "" && this.users.password.trim() == "" && this.users.confirmPassword.trim() == "") {
      console.log("Khong duoc de trong");
    } else if (this.users.password !== this.users.confirmPassword) {
      console.log("password va confirm password phai trung nhau");
    } else {
      console.log(this.users);
    }

  }
}
