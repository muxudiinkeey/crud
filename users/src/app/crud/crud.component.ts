import { Component, OnInit } from '@angular/core';
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
  apiData : Iuser[]= []; 
  constructor(private crud: CrudService, private router: Router){}

  ngOnInit(): void {
      this.getAllData();
  }

getAllData(){
  return this.crud.getData().subscribe(res =>{
    this.apiData = res;
   // console.table(this.apiData)
  })
}
addNewUser(){
this.router.navigateByUrl('adduser');
}
}
 