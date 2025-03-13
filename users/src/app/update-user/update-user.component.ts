import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit{

crud = inject (CrudService);
activateRouter = inject(ActivatedRoute);

userId!:{
  uid:number;
}
  
  

  
    
  



ngOnInit(): void {
  this.userId = {
   uid:this.activateRouter.snapshot.params['id']
}
console.info(this.userId.uid);

}
}
