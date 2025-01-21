import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  private reviews: any[] = [
    {
      id: 1,
      review: "The academy is excellent if you’re new to trading and want to learn more about how to make investing in your hands. This facility and its staff are top-notch.",
      name: "Krapal",
      role: "Option-Trading",
      image: "assets/img/logo1.png"
    },
    {
      id: 2,
      review: "I am a beginner and this course turned out to be an excellent source for me. The instructor did an amazing job to keep me engaged throughout.",
      name: "Ashwin Bagoria",
      role: "Technical",
      image: "assets/img/logo1.png"
    },
    {
      id: 3,
      review: "Great Team, and Teachers with re-takes which for me have been a great tool to become a successful trader.",
      name: "Ankit Vishwakarma",
      role: "Founder, CreativeCo",
      image: "assets/img/logo1.png"
    }
  ];

  private currentIndex: number = 0;

  // Get the current review object
  public getCurrentReview(): any {
    return this.reviews[this.currentIndex];
  }

  // Navigate to the next review
  public nextReview(): void {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first review
    }
  }

  // Navigate to the previous review
  public prevReview(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 1; // Loop back to the last review
    }
  }



  // Call this method to update display on initialization
  ngOnInit(): void {
    
  }
}
