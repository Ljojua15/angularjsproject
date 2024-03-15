import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent {
  // @ts-ignore
  @Input() progress: number = 1000;

  ngOnInit(): void {
    let progress =
    this.loadData();
  }

  loadData() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#161932 ${this.progress}%, #f87070 0%)`;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
  }

