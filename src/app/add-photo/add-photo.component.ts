import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo} from '../model/photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html'
})
export class AddPhotoComponent implements OnInit {

  newPhoto = new Photo();

  message :string;

  constructor(private photoService : PhotoService,private router:Router) {}

  ngOnInit(): void {
  }

  addPhoto() {
    this.photoService.ajouterPhoto(this.newPhoto).subscribe(phot => {
      console.log(phot);
    });

    this.router.navigate(['photos']);
  }

}