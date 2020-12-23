import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/task.entity';
import {TaskService} from '../../service/task.service';
import Swal from 'sweetalert2';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoadingService} from '../../service/loading.service';

@Component({
        selector: 'app-task-list',
        templateUrl: './task-list.component.html',
        styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

        tasks: Task[];
        selectedDescription: string;
        loading = false;

        constructor(private taskService: TaskService, private ngbModal: NgbModal, private loadingService: LoadingService) {
        }

        ngOnInit(): void {
                this.loading = true;
                this.taskService.getAllTasks().subscribe(value => {
                        this.tasks = value;
                        this.loading = false;
                }, () => {
                        this.loading = false;
                });
        }

        get completedTasks() {
                return this.tasks.filter(task => task.completed);
        }

        get uncompletedTasks() {
                return this.tasks.filter(task => !task.completed);
        }

        displayDescription(task: Task, modalTemplate) {
                // avec Bootstrapo
                this.selectedDescription = task.description;
                this.ngbModal.open(modalTemplate);


                // Avec Sweet Alert2
                // Swal.fire(task.description);
        }

        updateTaskCompletion(task: Task, isAlreayChanged = false) {
                if (!isAlreayChanged) {
                        task.completed = !task.completed;
                }
                this.loadingService.showLoading();
                this.taskService.editTask(task.id, task).subscribe(() => {
                        this.loadingService.hideLoading();
                });
        }
}
