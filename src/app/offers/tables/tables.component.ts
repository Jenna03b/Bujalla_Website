import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {
  displayCustom: boolean = false;


  activeIndex: number = 0;

  images: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImagesT().then((images) => (this.images = images));
  }

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

}
