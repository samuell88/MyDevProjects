import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../entity/task.entity';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
        providedIn: 'root'
})
export class TaskService {

        constructor(private http: HttpClient) {
        }
        // liste de tâches
        getAllTasks() {
                return this.http.get<Task[]>(environment.apiPrefix + '/task');
        }

        getOneTask(id): Observable<Task> {
                return this.http.get<Task>(environment.apiPrefix + '/task/' + id);
        }

        addTask(task: Task) {
                return this.http.post(environment.apiPrefix + '/task', task);
        }

        editTask(id, task: Task) {
                return this.http.put(environment.apiPrefix + '/task/' + id, task);
        }

        deleteTask(id) {
                return this.http.delete(environment.apiPrefix + '/task/' + id);
        }
}
