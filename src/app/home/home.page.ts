import { Component } from '@angular/core';
import { inOutAnimation } from '../animations/in-out';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    inOutAnimation()
  ]
})
export class HomePage {
  private parallaxSubscription: any;

  constructor(private events: EventsService) { }

  ngOnInit() {
    this.parallaxSubscription = this.events.subscribe('parallax:max_scroll', (data: any) => {
      console.log('Welcome', { data });
    });
  }

  ngOnDestroy() {
    this.parallaxSubscription.unsubscribe();
  }

  imgSrc = 'https://d1ralsognjng37.cloudfront.net/dc2de9b5-ad2c-44f2-9640-5ad106b1d49f.jpeg';

  showImage = false;
  onClick() {
    this.showImage = !this.showImage;
  }

  logAnimation($event) {
    console.log($event)
    console.log(`${$event.phase} animation`);
  }
}
