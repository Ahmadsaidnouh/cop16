import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {
  toggleText(event: Event) {
    const currentTarget = event.currentTarget as HTMLElement;
    const previousSibling = currentTarget.previousElementSibling as HTMLElement;
    const prevPreviousSibling = previousSibling.previousElementSibling as HTMLElement;

    if (currentTarget.innerHTML === 'Explore more') {
        currentTarget.innerHTML = 'Explore less';
      //   // Scroll to the bottom of the .efforts-main section
      //   const effortsMain = document.querySelector('.efforts-main') as HTMLElement;
      //   effortsMain.scroll({
      //     top: effortsMain.scrollHeight,
      //     behavior: 'smooth'
      // });
    } else if (currentTarget.innerHTML === 'Explore less') {
        currentTarget.innerHTML = 'Explore more';
    }
    previousSibling.classList.toggle('d-none');
    prevPreviousSibling.classList.toggle('d-none');
  }

}
