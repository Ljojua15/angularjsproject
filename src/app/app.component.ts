
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
  noOfFiles: number = 0;
  completed: boolean = false;
  changeTime: number = this.noOfFiles * 60;
  subscription: Subscription | undefined;
  title: any;


  distance:number =10*60*60

minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000* 60)) ;
seconds = Math.floor((this.distance % (1000 * 60)) / (1000) );


  ngOnInit(): void {
    this.updateProgress();
    console.log(this.changeTime);
    console.log(this.minutes, this.seconds)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
    this.subscription.unsubscribe();

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
