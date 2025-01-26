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
        { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94', caption: 'Annual Science Fair' },
        { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', caption: 'Cultural Festival' },
        { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865', caption: 'Graduation Ceremony' },
      ]
    },
    {
      title: 'Classroom',
      images: [
        { url: 'assets/img/classroom/class3.jpeg', caption: 'Classroom' },
        { url: 'assets/img/classroom/class4.jpeg', caption: 'Classroom' },
      ]
    },
    {
      title: 'Teachers',
      images: [
        { url: 'assets/img/lokendra-pic.jpg', caption: 'Lokendra Sir' },
        { url: 'assets/img/taha-sir-pic.jpg', caption: 'Taha Sir' },
      
      ]
    },
   
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
