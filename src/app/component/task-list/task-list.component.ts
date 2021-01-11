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

        // renvoie les tâches complétées
        get completedTasks() {
                return this.tasks.filter(task => task.completed);
        }
        // renvoie les tâches incomplètes
        get uncompletedTasks() {
                return this.tasks.filter(task => !task.completed);
        }
        // affichage de la description
        displayDescription(task: Task, modalTemplate) {
                // avec Bootstrapo
                this.selectedDescription = task.description;
                this.ngbModal.open(modalTemplate);


                // Avec Sweet Alert2
                // Swal.fire(task.description);
        }

        // tâches complétées
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
