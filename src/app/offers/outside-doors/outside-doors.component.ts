import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-outside-doors',
  templateUrl: './outside-doors.component.html',
  styleUrl: './outside-doors.component.css'
})
export class OutsideDoorsComponent implements OnInit {
  displayCustom: boolean = false;


  activeIndex: number = 0;

  images: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImagesO().then((images) => (this.images = images));
  }

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

}


