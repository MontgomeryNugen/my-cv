import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work-experience',
  templateUrl: './my-work-experience.component.html',
  styleUrls: ['./my-work-experience.component.css']
})
export class MyWorkExperienceComponent implements OnInit {
  jobs = ['Jackson Hewitt',
    'Ramos Home Services',
    'Infinite Systems'];

  constructor() { }

  ngOnInit() {

  }

}