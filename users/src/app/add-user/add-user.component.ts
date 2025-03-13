import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm : FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private crud: CrudService){
    this.addUserForm = this.fb.group({
     name: [''],
     username: [''],
     email: [''],
    })
  };


  onSubmit(){
    console.table(this.addUserForm.value);
    this.crud.postdata(this.addUserForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud')
    })
  }


  onCancel(){
this.router.navigateByUrl('crud');
  }


}
