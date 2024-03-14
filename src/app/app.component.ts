import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progress: number = 0;
  noOfFiles: number = 100;
  completed: boolean = false;

  public ngOnInit(): void {
    this.updateProgress();
  }

  delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, 100));
  }

  async updateProgress() {
    this.completed = false;
    let n = 100 / this.noOfFiles;
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(10);
      this.progress = Math.round(i * n);
      console.log(i);
    }
    this.completed = false;
  }
}
