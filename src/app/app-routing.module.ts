import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
const routes: Routes = [
  {path: "photos", component : PhotosComponent},
   { path: "add-photo", component : AddPhotoComponent } ,
   { path: "", redirectTo: "photos", pathMatch: "full" } ,
   {path: "updatePhoto/:id", component: UpdatePhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
