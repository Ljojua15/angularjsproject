import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Project } from '../projects/project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  onCancel() {
    throw new Error('Method not implemented.');
  }
  onCreateProject() {
    throw new Error('Method not implemented.');
  }
  @Output() creationCancelled = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<Project>();
  @ViewChild('f') form: NgForm | undefined;
  availableStatus = ['active', 'inactive', 'critical'];

  constructor() {}

  ngOnInit() {}

  // onCreateProject() {
  //   this.projectCreated.emit({
  //     name: this.form.value.name,
  //     description: this.form.value.description,
  //     status: this.form.value.status,
  //   });
  // }

  // onCancel() {
  //   this.form.reset();
  //   this.creationCancelled.emit();
  // }
}
