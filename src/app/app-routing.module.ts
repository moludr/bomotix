import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideolistComponent } from './videolist/videolist.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: "",
    component: VideolistComponent
  },
  {
    path: "upload",
    component: UploadVideoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
