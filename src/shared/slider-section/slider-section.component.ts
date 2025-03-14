import { Component, OnDestroy, OnInit } from '@angular/core';

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
            <div class="slide-content">
            <div class="text-container">
              <div *ngFor="let text of image.texts">
                <div [class]="text.size === 'large' ? 'text-large' : 'text-small'">
                  {{text.content}}
                </div>
              </div>
            </div>
          </div>
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
export class SliderSectionComponent implements OnInit,OnDestroy  {
  images = [
    {
      url: 'assets/img/best.jpg',
      alt: 'Slide 1',
      texts: [
        { content: 'Passion of Winning a Trade', size: 'small' },
        { content: 'Arts Of Finance', size: 'large' },
        { content: 'Share Market Classes', size: 'small' }
      ]
    },
    {
      url: 'assets/img/sebi.jpg', 
      alt: 'Slide 2',
      texts: [
        { content: 'Honored by Ms. Madhabi Puri Buch Chairperson, SEBI', size: 'large' },
        { content: 'I was deeply honored to be recognized by the current SEBI Chairperson for my contributions to the financial industry.', size: 'small' }
      ]
    },
    {
      url: 'assets/img/nism.jpg',
      alt: 'Slide 3',
      texts: [
        { content: 'Our Mentor is SEBI Registered', size: 'large' },
        { content: 'Guiding you with expertise and trust for a secure financial future.', size: 'small' }
      ]
    }
  ];

  currentIndex = 0;
  isDragging = false;
  startPos = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 120000); // Change slide every 1 second (1000 ms)
  }
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
    // If at the last slide, go back to the first slide
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
