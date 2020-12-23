import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/task.entity';
import {TaskService} from '../../service/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingService} from '../../service/loading.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
        selector: 'app-task-details',
        templateUrl: './task-details.component.html',
        styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

        // les valeurs par défaut sont définies dans l'entité
        task: Task;
        taskId;

        formSubmitted = false;

        constructor(private taskService: TaskService,
                    private route: ActivatedRoute,
                    private router: Router, private loadingService: LoadingService) {
        }

        ngOnInit(): void {
                this.taskId = this.route.snapshot.paramMap.get('id');
                this.taskService.getOneTask(this.taskId).subscribe(value => {
                        this.task = value;
                });
        }

        editTask(form: NgForm) {

                this.formSubmitted = true;

                if (form.invalid) {
                        return;
                }

                this.loadingService.showLoading();

                this.taskService.editTask(this.taskId, this.task).subscribe(() => {
                        this.router.navigate(['/']);
                        this.loadingService.hideLoading();
                });
        }

        deleteTask() {
                this.loadingService.showLoading();
                this.taskService.deleteTask(this.taskId).subscribe(() => {
                        this.router.navigate(['/']);
                        this.loadingService.hideLoading();
                }, error => {
                        this.loadingService.hideLoading();
                        Swal.fire('Erreur', 'Problème de requête : ' + error.status + ' ' + error.message);
                        console.error(error);
                });
        }
}
