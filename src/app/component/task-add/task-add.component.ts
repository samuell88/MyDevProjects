import {Component, OnInit} from '@angular/core';
import {Task} from '../../entity/task.entity';
import {NgForm} from '@angular/forms';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {LoadingService} from '../../service/loading.service';

@Component({
        selector: 'app-task-add',
        templateUrl: './task-add.component.html',
        styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

        // les valeurs par défaut sont définies dans l'entité
        task: Task = new Task();

        formSubmitted = false;

        loading = false;

        constructor(private taskService: TaskService, private router: Router, private loadingService: LoadingService) {
        }

        ngOnInit(): void {
        }

        addTask(form: NgForm) {

                this.formSubmitted = true;

                if (form.invalid) {
                        return;
                }

                this.loadingService.showLoading();
                this.loading = true;
                this.taskService.addTask(this.task).subscribe(() => {
                        this.router.navigate(['/']);
                        this.loading = false;
                        this.loadingService.hideLoading();
                });
        }
}
