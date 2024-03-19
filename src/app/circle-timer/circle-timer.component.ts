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
  @ViewChild('colorCircle') colorCircle!: ElementRef;

  test = false
  firstTimer:number =20
  secondTimer:number =10
  thirdTimer:number =30

  mainTimer !: number
  colorChange : string = '#f87070'

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {



  }

  ngOnInit(): void {

  }



  loadData(arg:number, type:string) {
    const colorCircle = this.colorCircle.nativeElement
    this.renderer.setStyle(colorCircle, 'background-color', 'blue');



    if(type === 'first') {
      this.colorChange ='blue';
      this.renderer.setStyle(colorCircle, 'background-color', 'blue');
    }else if(type === 'second') {
      this.colorChange ='#f87070';
      this.renderer.setStyle(colorCircle, 'background-color', '#f87070');
    }else if(type === 'third') {
      this.colorChange ='red';
      this.renderer.setStyle(colorCircle, 'background-color', 'red');

    }

    // @ts-ignore
    this.renderer.setStyle(colorCircle, 'background', `conic-gradient( #161932 ${this.progress}%, ${this.colorChange} 0%)`);
    this.mainTimer = arg
  }








  ngOnChanges(changes: SimpleChanges): void {

    this.moveSwiperColor(0);
  }



  moveSwiperColor(position: number) {
    this.test =false
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

