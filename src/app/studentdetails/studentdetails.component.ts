import { Component, OnInit } from '@angular/core';
import {products} from './studentdetails';



@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  v:products= new products();

  constructor() { }

  ngOnInit(): void {
  }

}
