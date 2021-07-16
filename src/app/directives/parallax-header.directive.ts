import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
import { EventsService } from '../services/events.service'

const HEADER_HEIGHT_EXTENDED = 300;
const HEADER_HEIGHT_COMPRESSED = 44;
const IMAGE_MOVE_VALUE = 2;
const MAX_SCROLL = HEADER_HEIGHT_EXTENDED - HEADER_HEIGHT_COMPRESSED;
const EVENT_SUBSCRIPTION = 'parallax:max_scroll';

@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {
  header: any;
  toolbar: any;
  title: any;

  private scrolledAboveLine = false;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private domCtrl: DomController,
    private events: EventsService
  ) { }

  ngOnInit() {
    let content = this.element.nativeElement;
    this.header = content.querySelector('.parallax-header');
    this.toolbar = this.header.querySelector('.parallax-toolbar');
    this.title = this.header.querySelector('.parallax-title > h1');

    this.header.classList.add('extended');
    this.toolbar.classList.add('extended');
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    if (scrollTop < MAX_SCROLL && scrollTop > 0) {
      this.domCtrl.write(() => {
        const moveImage = scrollTop / IMAGE_MOVE_VALUE;
        // const moveTitle = -scrollTop / 1.5;
        const opacityBg = (scrollTop / MAX_SCROLL).toFixed(2);
        //const opacityTitle = (scrollTop / MAX_SCROLL).toFixed(2);

        this.renderer.setStyle(this.header, 'webkitTransform', 'translateY(-' + moveImage + 'px)');
        this.renderer.setStyle(this.toolbar, 'webkitTransform', 'translateY(' + moveImage + 'px)');
        this.renderer.setStyle(this.toolbar, 'background', 'rgba(255,255,255,' + opacityBg + ')');
        // this.renderer.setStyle(this.title, 'opacity', opacityTitle);
        // this.renderer.setStyle(this.title, 'webkitTransform', 'translateY(' + moveTitle + 'px)');
      })
    }

    if (scrollTop >= MAX_SCROLL && !this.scrolledAboveLine) {
      this.scrolledAboveLine = true;
      this.toolbar.classList.remove('extended');
      this.header.classList.remove('extended');
      this.header.classList.remove('ion-no-border')
      this.toolbar.querySelector('ion-title').classList.remove('opacity-0');
      this.renderer.setStyle(this.header, 'webkitTransform', 'translateY(0px)');
      this.renderer.setStyle(this.toolbar, 'webkitTransform', 'translateY(0px)');

    }
    if (scrollTop <= MAX_SCROLL && this.scrolledAboveLine) {
      this.scrolledAboveLine = false;
      this.toolbar.classList.add('extended');
      this.header.classList.add('extended');
      this.header.classList.add('ion-no-border');
      this.toolbar.querySelector('ion-title').classList.add('opacity-0');
    }

  }
}
