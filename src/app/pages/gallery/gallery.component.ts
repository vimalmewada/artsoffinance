import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedFilter: string = 'all';
  previewImage: any | null = null;
  currentSection: any | null = null;
  currentImageIndex: number = -1;
  gallerySections: any[] = [
    {
      title: "Mentor's Certification",
      images: [
        { url: 'assets/img/Mentordocument/certificate1.jpeg', caption: 'nism ' },
        { url: 'assets/img/Mentordocument/certificate2.jpeg', caption: 'nism' },
        { url: 'assets/img/Mentordocument/lokendra_nism2.png', caption: 'nism' },
        { url: 'assets/img/Mentordocument/certificatet.jpg', caption: 'nism' },
      ]
    },
    {
      title: 'Events & Activities',
      images: [
        { url: 'assets/img/event/pachmari/pachmari_1.jpeg', caption: 'pachmarhi tour' },
        { url: 'assets/img/event/pachmari/pachmari_2.jpeg', caption: 'pachmarhi tour' },
        { url: 'assets/img/event/event-anniversary/event_3.jpeg', caption: 'Investor Awareness Program' },
        { url: 'assets/img/event/event-anniversary/event_4.jpeg', caption: 'Investor Awareness Program' },
        { url: 'assets/img/event/event-anniversary/event_1.jpeg', caption: 'Birthday Celebration' },
        { url: 'assets/img/event/event-anniversary/event_2.jpg', caption: 'Artsoffinance anniversary' },
        
      ]
    },
    {
      title: 'Classroom',
      images: [
        { url: 'assets/img/classroom/class_1.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class_2.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class_3.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class_4.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class_5.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class_6.jpeg', caption: 'Classroom' },
      ]
    },
    // {
    //   title: 'Teachers',
    //   images: [
    //     { url: 'assets/img/lokendra-pic.jpg', caption: 'Lokendra Sir' },
    //     { url: 'assets/img/tahaSir.jpeg', caption: 'Taha Sir' },
      
    //   ]
    // },
   
  ];

  get filteredSections(): any[] {
    if (this.selectedFilter === 'all') {
      return this.gallerySections;
    }
    return this.gallerySections.filter(section => section.title === this.selectedFilter);
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }


  openPreview(section: any, image: any): void {
    this.currentSection = section;
    this.previewImage = image;
    this.currentImageIndex = section.images.indexOf(image);
  }

  closePreview(): void {
    this.previewImage = null;
    this.currentSection = null;
    this.currentImageIndex = -1;
  }

  hasPrevious(): boolean {
    return this.currentSection !== null && this.currentImageIndex > 0;
  }

  hasNext(): boolean {
    return this.currentSection !== null && this.currentImageIndex < this.currentSection.images.length - 1;
  }

  showPrevious(): void {
    if (this.hasPrevious() && this.currentSection) {
      this.currentImageIndex--;
      this.previewImage = this.currentSection.images[this.currentImageIndex];
    }
  }

  showNext(): void {
    if (this.hasNext() && this.currentSection) {
      this.currentImageIndex++;
      this.previewImage = this.currentSection.images[this.currentImageIndex];
    }
  }
}
