import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedFilter: string = 'all';

  gallerySections: any[] = [
    {
      title: 'Academic Facilities',
      images: [
        { url: 'https://images.unsplash.com/photo-1562774053-701939374585', caption: 'Modern Library' },
        { url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0', caption: 'Computer Lab' },
        { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', caption: 'Science Laboratory' },
        { url: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc', caption: 'Physics Lab' },
      ]
    },
    {
      title: 'Campus Life',
      images: [
        { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f', caption: 'Student Commons' },
        { url: 'https://images.unsplash.com/photo-1569447891824-5f50dac394c3', caption: 'Sports Complex' },
        { url: 'https://images.unsplash.com/photo-1562774053-701939374585', caption: 'Cafeteria' },
        { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', caption: 'Student Lounge' },
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
      title: 'Infrastructure',
      images: [
        { url: 'https://images.unsplash.com/photo-1562774053-701939374585', caption: 'Main Building' },
        { url: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66', caption: 'Campus Entrance' },
        { url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3', caption: 'Auditorium' },
      ]
    },
    {
      title: 'Student Activities',
      images: [
        { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', caption: 'Student Council' },
        { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', caption: 'Robotics Club' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', caption: 'Debate Club' },
        { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', caption: 'Art Club' },
      ]
    },
    {
      title: 'Campus Amenities',
      images: [
        { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24', caption: 'Campus Store' },
        { url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4', caption: 'Health Center' },
        { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72', caption: 'Student Services' },
        { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2', caption: 'Career Center' },
      ]
    }
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
}
