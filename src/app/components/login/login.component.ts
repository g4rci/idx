import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  user: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))

    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(4)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    var userLogin = this.loginForm.value.username;
    //var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
  //   if (filterJson.length > 0) {
  //     this.router.navigate(['/principal/ships'])
  //   } else {
  //     this.unregistered = true;
  //   }
    if (this.user.username === userLogin){
      this.router.navigate(['/principal/ships'])
    }else {
      this.unregistered = true;
    }
  }
}

