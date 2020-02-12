import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/confirm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, CanComponentDeactivate {

  @Input() message: string;
  @Output() reply = new EventEmitter();
  id: string;
  param: string;
  confi: boolean;
  constructor(private activateRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.confi = false;
    this.id = this.activateRouter.snapshot.params.id;
    this.param = this.activateRouter.snapshot.queryParams.param;
     // this.router.navigate(['id'], {queryParams: {param: this.param + 1}});
  }
  onReply() {
    this.reply.emit('me ha dicho:' + this.message);
  }
   confirm() {
    this.confi = true;
   }

   canDeactivate(): boolean {
     if (this.confi) {
       return true;
     } else {
       return confirm('quieres salir?');
     }
   }

}
