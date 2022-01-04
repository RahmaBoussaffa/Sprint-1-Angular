import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { FormsModule } from '@angular/forms';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotosComponent,
    AddPhotoComponent,
    UpdatePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
