import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app.component';
import {TaskListComponent} from './component/task-list/task-list.component';
import {TaskDetailsComponent} from './component/task-details/task-details.component';
import {TaskAddComponent} from './component/task-add/task-add.component';
import {NewsComponent} from './component/news/news.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TaskTableComponent } from './component/task-table/task-table.component';

@NgModule({
        declarations: [
                AppComponent,
                TaskListComponent,
                TaskDetailsComponent,
                TaskAddComponent,
                NewsComponent,
                TaskTableComponent
        ],
        imports: [
                BrowserModule,
                AppRoutingModule,
                NgbModule,
                HttpClientModule, // Ajout du module pour faire des requêtes Http
                FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule {
}
