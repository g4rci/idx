// import { OnInit } from '@angular/core';
// import { Injectable } from '@angular/core';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginComponent } from 'src/app/components/login/login.component';



// @Injectable({
//     providedIn: 'root'
//   })
// export class AuthService implements OnInit {

//   loginForm: FormGroup;
//   dataLoading: boolean = false;
//   users: any = JSON.parse(localStorage.getItem('user'));
//   unregistered: boolean = false;
//   invalid: boolean = false;

//   user: any;
//     constructor(
//         private login: LoginComponent,
//         private fb: FormBuilder,
//         private router: Router
//     ) { }

//     ngOnInit(): void { 
//         this.loginForm = this.fb.group({
//             username: [ '', [Validators.required, Validators.minLength(3)]],
//             password: [ '', [Validators.required, Validators.minLength(4)]]
//           })
//     }

//     loginU() {
//         if (this.loginForm.invalid) { return }
//         // TODO : Falta integrar el servicio para autentificar al usuario
//         // JSON simulando usuarios
//         var userLogin = this.loginForm.value.username;
//         var filterJson = this.users.filter(function (user) { return user.username === userLogin  });
//         console.log(filterJson);
//         if (filterJson.length > 0) {
//           this.router.navigate(['/principal/ships'])
//         } else {
//           this.unregistered = true;
//         }
//         if (filterJson.username === userLogin){
//           this.router.navigate(['/principal/ships'])
//         }else {
//           this.unregistered = true;
//         }
//       }
// }







