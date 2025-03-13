import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm : FormGroup;

  constructor(private router: Router, private fb: FormBuilder){
    this.addUserForm = this.fb.group({
     name: [''],
     username: [''],
     email: [''],
    })
  };


  onSubmit(){
    console.table(this.addUserForm.value);
  }
  onCancel(){
this.router.navigateByUrl('crud');
  }
}
