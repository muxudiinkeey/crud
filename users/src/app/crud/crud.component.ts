import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  base_url: string = "http://localhost:3000/users/id";
  apiData : Iuser[]= []; 

router= inject(Router);
crud = inject(CrudService)

  

  ngOnInit(): void {
      this.getAllData();
  }

getAllData(){
   this.crud.getData().subscribe(res =>{
    this.apiData = res;
   
  })
}
addNewUser(){
this.router.navigateByUrl('adduser');
}

onDelete(id: number){
return this.crud.http.delete('${this.base_url}/${id}')
}

onUpdate(id:number){
  this.router.navigate(['updateuser', id]);
}

}
 