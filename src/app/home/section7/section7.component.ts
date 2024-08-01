import { Component } from '@angular/core';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component {

  city = "Riyadh"

  rotate(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const cities = Array.from(document.querySelectorAll('.city'));
    const targetIndex = cities.indexOf(target);

    this.city = (target.querySelector("span") as HTMLSpanElement).innerHTML;

    // Find the number of steps to rotate left
    const steps = targetIndex;

    // Rotate the cities array left by the number of steps
    for (let i = 0; i < steps; i++) {
        const firstItem = cities.shift();
        if (firstItem) {
            cities.push(firstItem);
        }
    }

    // Update the classes to reflect the new order
    cities.forEach((item, index) => {
        item.classList.remove('city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7');
        item.classList.add(`city${index + 1}`);
    });
}

}
