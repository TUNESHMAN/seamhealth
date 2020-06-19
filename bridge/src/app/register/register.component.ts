import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  registerFormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    isManager: new FormControl(false, Validators.required),
  })

  ngOnInit(): void {
  }

  register() {
    const { username, password, isManager } = this.registerFormGroup.value;
    this.http.post("https://form-monitor.herokuapp.com/user/register", { username, password, isManager }).subscribe((res: any) => {
      const { message } = res;
      if (message === 'User created successfully') {
        this.router.navigate(['/login'])
      }
    })


  }
}
