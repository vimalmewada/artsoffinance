import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];
  categories: string[] = [];
  lastestBlog: any[] = []
  galleryImages: string[] = [];
  allTags: any[] = [];
  categoryName: string | null | undefined;
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category');
    });
    if(this.categoryName){
      this.getBlogByCategoryName();
    }else{
      this.blogList();
    }
    this.categoriesList();
    this.lastestBlogList();
    this.recentPost();
    this.tagList();

  }
  getBlogByCategoryName() {
    if (typeof this.categoryName === 'string') {
      this.blogService.getBlogByCategory(this.categoryName).subscribe({
        next: (res => {
          this.blogs = res;
        }), error: (err => {
          console.error(err);
        })
      })
    }
  }
  tagList() {
    this.blogService.getAllTags().subscribe({
      next: (res => {
        this.allTags = res;
      }), error: (err => {
        console.error(err);
      })
    })
  }
  recentPost() {
    this.blogService.getRecentPostImages().subscribe({
      next: (res => {
        this.galleryImages = res;
        console.log(this.galleryImages);
      }), error: (err => {
        console.error(err);
      })
    })
  }
  categoriesList() {
    this.blogService.getAllCategories().subscribe({
      next: (res => {
        this.categories = res;
      }), error: (err => {
        console.error(err);
      })
    })
  }

  lastestBlogList() {
    this.blogService.getLatestBlogs().subscribe({
      next: (res => {
        this.lastestBlog = res;
      }), error: (err => {
        console.error(err);
      })
    })
  }

  blogList() {
    this.blogService.getBlogList().subscribe({
      next: (res => {
        this.blogs = res;
      }), error: (err => {
        console.error(err);
      })
    })
  }

}
