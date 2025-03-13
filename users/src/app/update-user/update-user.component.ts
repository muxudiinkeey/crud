import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
constructor(private crud: CrudService, private activateRouter: ActivatedRoute){}
userId!: {
  uid: number;
}
ngOnInit(): void {
this.userId = {
  uid: this.activateRouter.snapshot.params['id']
}
console.table(this.userId.uid);
 //this.crud.getDataById()  
}

}
