import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dateFormatter(instruction: string) {

    let measure = 1;
    
    if (instruction == 'old') {
      measure  = 0;
    }

    let d = new Date(),
      month = '' + (d.getMonth() - measure),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  search(value: string) {
    this.router.navigate(['/search', value, 'popularity', this.dateFormatter('old'), this.dateFormatter('todays'), '25', '1'])
  }


}
