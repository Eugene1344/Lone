import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'lone-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
