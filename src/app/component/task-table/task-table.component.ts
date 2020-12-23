import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../entity/task.entity';

@Component({
        selector: 'app-task-table',
        templateUrl: './task-table.component.html',
        styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

        @Input()
        tasks: Task[];

        @Output()
        completedClick = new EventEmitter<Task>();

        @Output()
        descriptionClick = new EventEmitter<Task>();

        @Output()
        completedChange = new EventEmitter<Task>();

        @Input()
        checkboxMode = false;

        constructor() {
        }

        ngOnInit(): void {
        }

        completedClicked(task: Task) {
                this.completedClick.emit(task);
        }

        completedChanged(task: Task) {
                this.completedChange.emit(task);
        }

        descriptionClicked(task: Task) {
                this.descriptionClick.emit(task);
        }

}
