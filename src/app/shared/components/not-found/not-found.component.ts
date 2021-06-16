import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  @Input() title = 'Nothing here!';
  @Input() message = 'Visit after Sometime';

  @Input() visibility = true;
  @Input() isError = false;

  constructor() { }

  ngOnInit() {}

}
