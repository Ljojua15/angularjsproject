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


  firstTimer:number =10
  secondTimer:number =20
  thirdTimer:number =30

  mainTimer : number = this.firstTimer

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {



  }



  ngOnInit(): void {



  }



  loadData(arg:number, type:string) {
    let scrollProgress = document.getElementById('progress');
    let color = 'red'
    if(type === 'first') {
       color = 'blue'
    }else if(type === 'second') {
      color = '#f87070'
    }else if(type === 'third') {
      color = 'red'
    }

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient( #161932 ${this.progress}%, ${color} 0%)`;
    this.mainTimer = arg
  }








  ngOnChanges(changes: SimpleChanges): void {

    this.moveSwiperColor(0);
  }



  moveSwiperColor(position: number) {

    const swiperColor = this.swipercolor.nativeElement;
    this.renderer.setStyle(swiperColor, 'transition', 'left 0.5s ease-out');
    switch (position) {
      case 1:
        this.renderer.setStyle(swiperColor, 'left', '5px');
        this.renderer.setStyle(swiperColor, 'right', 'auto');
        this.loadData(this.firstTimer, 'first')
        console.log(this.firstTimer)


        break;
      case 2:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
        this.loadData(this.secondTimer, 'second');
        break;
      case 3:
        this.renderer.setStyle(swiperColor, 'left', 'auto');
        this.renderer.setStyle(swiperColor, 'left', '65.5%');
        this.loadData(this.thirdTimer, 'third');
        console.log(this.thirdTimer);


        break;
      default:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
        this.renderer.setStyle(swiperColor, 'right', 'auto');
        this.renderer.setStyle(swiperColor, 'display', 'block');
        this.loadData(this.secondTimer, 'second');
        break;

    }


  }



  }

