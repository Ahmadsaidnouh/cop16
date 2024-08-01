import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  // rotate(event: Event) {
  //   const target = event.currentTarget as HTMLElement;
  //   const motiveItems = Array.from(document.querySelectorAll('.motive-item'));
  //   const targetIndex = motiveItems.indexOf(target);

  //   // Find the middle index (2 for a zero-based index)
  //   const middleIndex = Math.floor(motiveItems.length / 2);

  //   if (targetIndex === middleIndex) {
  //     // If the clicked item is already in the middle, do nothing
  //     return;
  //   }

  //   const direction = targetIndex < middleIndex ? 'left' : 'right';
  //   const steps = Math.abs(targetIndex - middleIndex);

  //   for (let i = 0; i < steps; i++) {
  //     if (direction === 'right') {
  //       // Move the first item to the end of the array
  //       const firstItem = motiveItems.shift();
  //       if (firstItem) {
  //         motiveItems.push(firstItem);
  //       }
  //     } else {
  //       // Move the last item to the start of the array
  //       const lastItem = motiveItems.pop();
  //       if (lastItem) {
  //         motiveItems.unshift(lastItem);
  //       }
  //     }
  //   }

  //   // Update the DOM to reflect the new order
  //   const parent = target.parentElement;
  //   if (parent) {
  //     motiveItems.forEach(item => parent.appendChild(item));
  //   }
  // }
  rotate(event: Event) {
    const target = event.currentTarget as HTMLElement;
    
    const motiveItems = Array.from(document.querySelectorAll('.motive-item'));
    const targetIndex = motiveItems.indexOf(target);
    
    // Find the middle index (2 for a zero-based index)
    const middleIndex = Math.floor(motiveItems.length / 2);

    if (target.classList.contains(".item3")) {
      // If the clicked item is already in the middle, do nothing
      return;
    }

    const direction = targetIndex < middleIndex ? 'right' : 'left';
    const steps = Math.abs(targetIndex - middleIndex);

    if (direction === 'left') {
      for (let i = 0; i < steps; i++) {
        const firstItem = motiveItems.shift();
        if (firstItem) {
          motiveItems.push(firstItem);
        }
      }
    } else {
      for (let i = 0; i < steps; i++) {
        const lastItem = motiveItems.pop();
        if (lastItem) {
          motiveItems.unshift(lastItem);
        }
      }
    }

    // Update the classes to reflect the new order
    motiveItems.forEach((item, index) => {
      item.classList.remove('item1', 'item2', 'item3', 'item4', 'item5');
      item.classList.add(`item${index + 1}`);
    });
  }

}
