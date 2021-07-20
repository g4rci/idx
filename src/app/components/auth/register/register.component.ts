import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
// import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  userList: any[]

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      pasword: [ '', [Validators.required, Validators.minLength(4)]],

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }

    // TODO : Falta integrar el servicio para registrar al usuario
    // JSON simulando usuarios

    var userLogin = this.registerForm.value;
    
    this.userList = JSON.parse(localStorage.getItem('user'));
    this.userList.push(userLogin)
    localStorage.setItem('user', JSON.stringify(this.userList))
    console.log('User Register -->', this.userList)
    this.router.navigate(['/principal/ships'])

  }

}
