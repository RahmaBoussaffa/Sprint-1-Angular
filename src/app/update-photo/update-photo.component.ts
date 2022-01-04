import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../model/photo.model';

@Component({
selector: 'app-update-photo',
templateUrl: './update-photo.component.html',
styles: []
})
export class UpdatePhotoComponent implements OnInit {
currentPhoto = new Photo();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.consulterPhoto(this.activatedRoute.snapshot.params.id).
    subscribe( phot =>{ this.currentPhoto = phot; } ) ;
 
  }
  updatePhoto(){ 
    this.photoService.updatePhoto(this.currentPhoto).subscribe(phot => {
    this.router.navigate(['photos']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
   }