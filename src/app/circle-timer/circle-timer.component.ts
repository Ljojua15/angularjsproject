import {Component, ElementRef, Input, SimpleChanges, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent {
  // @ts-ignore
  @Input() progress: number = 1000;
  @ViewChild('swipercolor') swipercolor!: ElementRef;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {

  }

  ngOnInit(): void {
    let progress = 
    this.loadData();

  }

  loadData() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #f87070 0%)`;
  }
  loadData1() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #8ba320 0%)`;
  }



  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
    this.moveSwiperColor(0); // Initialize swiper-color position
  }
  moveSwiperColor(position: number) {
    
    const swiperColor = this.swipercolor.nativeElement;
    this.renderer.setStyle(swiperColor, 'transition', 'left 0.5s ease-out');
    switch (position) {
      case 1:
        this.renderer.setStyle(swiperColor, 'left', '5px');
        this.renderer.setStyle(swiperColor, 'right', 'auto');

        break;
      case 2:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
  
        break;
      case 3:
        this.renderer.setStyle(swiperColor, 'left', 'auto');
        this.renderer.setStyle(swiperColor, 'left', '65.5%');

        break;
      default:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
        this.renderer.setStyle(swiperColor, 'right', 'auto');
        this.renderer.setStyle(swiperColor, 'display', 'block');
        this.loadData1()
        break;

    }


  }
  }

