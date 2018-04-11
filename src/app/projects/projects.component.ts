import { Component, OnInit } from '@angular/core';
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
