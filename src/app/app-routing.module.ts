import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PlatformComponent } from './platform/platform.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'projects',
    component: ProjectsComponent
  },{
    path: 'misa-platform',
    component: PlatformComponent
  },{
    path: 'resume',
    component: ResumeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
