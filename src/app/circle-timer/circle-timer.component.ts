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
 
    this.loadData();

    
  }


  loadData() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #f87070 0%)`;
    this.mainTimer = this.secondTimer 

  }
  loadData1() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #8ba320 0%)`;
    this.mainTimer = this.firstTimer
  }
  loadData2() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #8ba320 0%)`;
    this.mainTimer = this.thirdTimer
  }





  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
    this.moveSwiperColor(0);
  }



  moveSwiperColor(position: number) {
    
    const swiperColor = this.swipercolor.nativeElement;
    this.renderer.setStyle(swiperColor, 'transition', 'left 0.5s ease-out');
    switch (position) {
      case 1:
        this.renderer.setStyle(swiperColor, 'left', '5px');
        this.renderer.setStyle(swiperColor, 'right', 'auto');
        this.loadData()
        console.log(this.firstTimer)
    

        break;
      case 2:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
        this.loadData1()
 
        break;
      case 3:
        this.renderer.setStyle(swiperColor, 'left', 'auto');
        this.renderer.setStyle(swiperColor, 'left', '65.5%');
        this.loadData2()
        console.log(this.thirdTimer);
  
        
        break;
      default:
        this.renderer.setStyle(swiperColor, 'left', '33.5%');
        this.renderer.setStyle(swiperColor, 'right', 'auto');
        this.renderer.setStyle(swiperColor, 'display', 'block');
        this.loadData1()
        console.log(this.firstTimer)
        break;

    }


  }



  }

