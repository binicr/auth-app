import { Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form :FormGroup;
  constructor(private ds:dataService ,private fb:FormBuilder) { 
    this.form = this.fb.group(
        {
          username:['',Validators.required],
          password:['',Validators.required]
        }
    )
  }

  ngOnInit(): void {
    this.ds.getData().subscribe((val)=> {console.log("values-<"+val)})
  }
  login()
  {
    const loginData = this.form.value;
    console.log(loginData.username );
    console.log(loginData.password );
  }
}
