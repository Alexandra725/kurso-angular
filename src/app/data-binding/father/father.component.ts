import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild: string;
  messageFromChild: string;

  constructor( private firstService: FirstService, private router: Router) { }

  ngOnInit(): void {
   // this.messageToChild = 'hola hijo';
  }
  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }

  responseFromChild(ev: string) {
    this.messageFromChild = ev;
  }

  goDirectivas() {
    this.router.navigate(['directivas']);
  }
}
