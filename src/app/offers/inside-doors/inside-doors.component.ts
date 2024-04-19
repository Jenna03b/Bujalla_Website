import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-inside-doors',
  templateUrl: './inside-doors.component.html',
  styleUrl: './inside-doors.component.css'
})
export class InsideDoorsComponent implements OnInit {
  displayCustom: boolean = false;


  activeIndex: number = 0;

  images: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImagesI().then((images) => (this.images = images));
  }

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }
}
