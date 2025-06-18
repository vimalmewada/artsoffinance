import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogPost: any;
  blogId: any;
  allTags: any[] = [];
  galleryImages: string[] = [];
  categories: string[] = [];
  lastestBlog: any[] = [];

  private destroy$ = new Subject<void>();
  constructor(private sanitizer: DomSanitizer, private blogService: BlogService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.blogId = id ? +id : undefined;
    });
    if (!this.blogId) {
      return;
    }
    this.loadAllData();

  }

  loadAllData(): void {
    forkJoin({
      blog: this.blogService.getBlogById(this.blogId!),
      tags: this.blogService.getAllTags(),
      recent: this.blogService.getRecentPostImages(),
      categories: this.blogService.getAllCategories(),
      latest: this.blogService.getLatestBlogs()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (results) => {
        if (!results.blog) {
          return;
        }
        this.blogPost = results.blog;
        this.allTags = results.tags;
        this.galleryImages = results.recent;
        this.categories = results.categories;
        this.lastestBlog = results.latest;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  renderContent(content: any): SafeHtml {
    let html = '';

    switch (content.type) {
      case 'paragraph':
        html = `<p class="disc ${content.class || ''}">${content.text}</p>`;
        break;

      case 'quote':
        html = `
          <div class="rts-quote-area text-center">
            <h5 class="title">"${content.text}"</h5>
            <a href="#" class="name">${content.author}</a>
            <span>${content.role}</span>
          </div>
        `;
        break;

      case 'image-gallery':
        const images = content.images.map((img: string) => `
          <div class="col-lg-6 col-md-6">
            <div class="thumbnail details">
              <img src="${img}" alt="blog_image">
            </div>
          </div>
        `).join('');
        html = `<div class="row g-5">${images}</div>`;
        break;

      case 'heading':
        html = `<h${content.level} class="title ${content.class || ''}">${content.text}</h${content.level}>`;
        break;

      case 'image-with-checklist':
        const items = content.items.map((item: string) => `
          <div class="single-check">
            <i class="far fa-check-circle"></i>
            <span>${item}</span>
          </div>
        `).join('');
        html = `
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="thumbnail details mb_sm--15">
                <img src="${content.image}" alt="blog_image">
              </div>
            </div>
            <div class="col-lg-7">
              <div class="check-area-details">${items}</div>
            </div>
          </div>
        `;
        break;

      default:
        html = '';
    }

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
