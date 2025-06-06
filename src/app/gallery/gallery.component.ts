import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';

interface GalleryImage {
  thumbnailImageSrc: string;
  itemImageSrc: string;
  alt: string;
  title: string;
}

interface TabPanel {
  header: string;
  images: GalleryImage[] | undefined;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  displayCustom = false;
  activeIndex = 0;

  tabPanels: TabPanel[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    Promise.all([
      this.photoService.getImagesO(),
      this.photoService.getImagesI(),
      this.photoService.getImagesT(),
    ]).then(([exDoorsImg, inDoorsImg, tableImg]) => {
      this.tabPanels = [
        { header: 'Drzwi zewnętrzne', images: exDoorsImg },
        { header: 'Drzwi wewnętrzne', images: inDoorsImg },
        { header: 'Stoły', images: tableImg },
        { header: 'Tarcica', images: exDoorsImg },
      ];
    });
  }

  imageClick(index: number): void {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
