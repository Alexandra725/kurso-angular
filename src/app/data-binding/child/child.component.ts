import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() reply = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  onReply() {
    this.reply.emit('me ha dicho:' + this.message);
  }

}
