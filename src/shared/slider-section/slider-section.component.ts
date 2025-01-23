import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  template: `
    <div class="slider-container">
      <button 
        class="arrow-button prev" 
        (click)="prev()" 
        [disabled]="currentIndex === 0"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        class="arrow-button next" 
        (click)="next()" 
        [disabled]="currentIndex === images.length - 1"
        aria-label="Next slide"
      >
        →
      </button>
      <div 
        class="slider" 
        [style.transform]="'translateX(' + -currentIndex * 100 + '%)'"
        (mousedown)="startDrag($event)"
        (mousemove)="onDrag($event)"
        (mouseup)="endDrag()"
        (mouseleave)="endDrag()"
        (touchstart)="startDrag($event)"
        (touchmove)="onDrag($event)"
        (touchend)="endDrag()"
      >
        <div class="slide" *ngFor="let image of images">
          <img [src]="image.url" [alt]="image.alt" draggable="false">
        </div>
      </div>
      <div class="slider-controls">
        <button 
          *ngFor="let image of images; let i = index"
          class="dot-indicator"
          [class.active]="i === currentIndex"
          (click)="goToSlide(i)"
          [attr.aria-label]="'Go to slide ' + (i + 1)"
        ></button>
      </div>
    </div>
  `,
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent {
  images = [
    {
      url: 'assets/img/best.jpg',
      alt: 'Slide 1'
    },
    {
      url: 'assets/img/sebi.jpg', 
      alt: 'Slide 2'
    },
    {
      url: 'assets/img/nism.jpg',
      alt: 'Slide 3'
    }
  ];

  currentIndex = 0;
  isDragging = false;
  startPos = 0;
  currentTranslate = 0;
  prevTranslate = 0;

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startPos = this.getPositionX(event);
    this.prevTranslate = this.currentTranslate;
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    event.preventDefault();
    const currentPosition = this.getPositionX(event);
    const diff = currentPosition - this.startPos;
    this.currentTranslate = this.prevTranslate + diff;
  }

  endDrag() {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;
    
    // If moved more than 100px, change slide
    if (Math.abs(movedBy) > 100) {
      if (movedBy < 0 && this.currentIndex < this.images.length - 1) {
        this.next();
      } else if (movedBy > 0 && this.currentIndex > 0) {
        this.prev();
      }
    }
    
    this.currentTranslate = 0;
    this.prevTranslate = 0;
  }

  getPositionX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent 
      ? event.clientX 
      : event.touches[0].clientX;
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
