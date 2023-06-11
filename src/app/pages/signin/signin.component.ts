import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public users = {
    email: "",
    password: ""
  }

  public SigninClick(): void {
    if (this.users.email.trim() != "" && this.users.password.trim() != "") {
      console.log(this.users);
    } else {
      console.log("hay nhap day du thong tin");
    }
  }
}
