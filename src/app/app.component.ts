
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, OnDestroy {
  progress: number = 0;
  noOfFiles: number = 1;
  completed: boolean = false;
  changeTime: number = this.noOfFiles * 60;
  subscription: Subscription | undefined;

  minutes:number = 20;
  seconds:number = 10;
  timer :any
  date = new Date();

  stopBtn: boolean = false;
  startBtm: boolean = false;



  ngOnInit(): void {
    this.updateProgress();
    this.updateTimer()
    this.start()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
    this.subscription.unsubscribe();

  }
}

  incr(type: 'M' | 'S'){
    if(type === 'M'){
      if(this.minutes >= 59) return;
      this.minutes += 1;
    }else {
      if(this.seconds >=59) return;
      this.seconds += 1
    }
  }
  // decr(type: 'M' | 'S'){
  //   if(type === 'M'){
  //     if(this.minutes <= 0) return;
  //     this.minutes -= 1;
  //   }else {
  //     if(this.seconds <=0) return;
  //     this.seconds -= 1
  //   }
  // }


  updateTimer(){
    this.date.setMinutes(this.minutes)
    this.date.setSeconds(this.seconds)
    this.date.setMilliseconds(0)

    const time = this.date.getTime()
    this.date.setTime(time - 1000)

    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds()

    if (this.date.getMinutes() === 0 &&
    this.date.getSeconds() === 0){
      clearInterval(this.timer);
      setTimeout(() =>{
        this.stop()
      }, 5000)

    }
  }

  stop(){
    clearInterval(this.timer)
    this.startBtm = true
  }

  reset(){
    this.minutes = 0;
    this.seconds = 0;
    this.stop()
  }


  start(){
    if(this.minutes > 0 || this.seconds > 0){
      this.stopBtn = true;
      this.updateTimer()

      if (this.seconds > 0 ) {
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000)
      }
    }
  }




  updateProgress() {
    this.completed = false;
    const n = 100 / this.changeTime;
    this.subscription = interval(1000)
      .pipe(
        take(this.changeTime + 1)
      )
      .subscribe(() => {
        this.progress += n;
        console.log(Math.round(this.progress));

      });
  }
}
