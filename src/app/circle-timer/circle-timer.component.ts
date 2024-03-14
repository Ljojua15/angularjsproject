import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent {
  // @ts-ignore
  @Input() progress: number = 50;

  ngOnInit(): void {
    let progress = 20
    this.loadData();
  }

  loadData() {
    let scrollProgress = document.getElementById('progress');

    // @ts-ignore
    scrollProgress.style.background = `conic-gradient(#008fff ${this.progress}%, #f2f2f4 0%)`;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
  }
