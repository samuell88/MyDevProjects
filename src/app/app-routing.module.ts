import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskListComponent} from './component/task-list/task-list.component';
import {TaskDetailsComponent} from './component/task-details/task-details.component';
import {TaskAddComponent} from './component/task-add/task-add.component';
import {NewsComponent} from './component/news/news.component';


const routes: Routes = [ // Chemin + nom du composant
        {path: 'home', component: TaskListComponent}, // Route de la page d'accueil
        {path: 'task-details/:id', component: TaskDetailsComponent}, // Route de la page de détail d'une tâche
        {path: 'task-add', component: TaskAddComponent}, // Route de la page d'ajout'd'une tâche
        // {path: 'task-remove/:id', component: TaskRemoveComponent}, // Route de la page de suppression d'une tâche
        {path: 'news', component: NewsComponent}, // Route de la page des notes
        {path: '', redirectTo: '/home', pathMatch: 'full'}, // Route de la page de détail d'une tâche
        {path: '**', redirectTo: '/home', pathMatch: 'full'}, // Redirection vers la page d'accueil
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule {
}
