import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  toggleRegistrationList() {
    const registrationList = document.querySelector(".registration-list") as HTMLUListElement;
    const registrationArrow = document.querySelector(".regis-arrow") as HTMLUListElement;

    registrationList.classList.toggle("display-list");
    registrationArrow.classList.toggle("rotate-arrow");
  }
}
