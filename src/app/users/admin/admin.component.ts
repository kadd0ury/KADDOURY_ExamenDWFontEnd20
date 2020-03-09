import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users = []

  constructor(private adminservice  : AdminService) { }

  ngOnInit() {

    this.adminservice.getUser().subscribe((data:any [])=>{
    this.users = data

    });

  }






}
