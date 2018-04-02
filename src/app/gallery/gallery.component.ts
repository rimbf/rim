import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryImage.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {


  // trustedDashboardUrl: SafeResourceUrl;
  // image: SafeStyle;
  images: Observable<GalleryImage[]>

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.images = this.imageService.getImages();

  }

  ngOnChanges() {

    this.images = this.imageService.getImages();
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
