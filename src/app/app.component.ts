import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  progress: number = 33456523842387;
  noOfFiles: number = 300;
  completed: boolean = false;

  public ngOnInit(): void {
    this.updateProgress();
  }

  delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, 1000));
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
