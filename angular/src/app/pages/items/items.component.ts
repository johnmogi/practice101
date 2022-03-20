import { Component, OnInit } from '@angular/core';
import { items } from '../../mock-items'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items = items;

  constructor() { }

  ngOnInit(): void {
  }

}
