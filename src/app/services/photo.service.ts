import { Injectable } from '@angular/core';
import { Photo } from '../model/photo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class PhotoService {
  apiURL: string = 'http://localhost:8090/photos/api';
photos : Photo[]; 
photo : Photo;
constructor(private http : HttpClient) {

}
listePhotos():Observable<Photo[]> {
  return this.http.get<Photo[]>(this.apiURL);
}
ajouterPhoto( phot: Photo): Observable<Photo>{
  return this.http.post<Photo>(this.apiURL, phot, httpOptions);
}
supprimerPhoto( id : number ){
  //supprimer le produit prod du tableau produits
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }

  consulterPhoto(id:number): Observable<Photo> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Photo>(url);
    
    }
    
    trierPhotos(){
      this.photos = this.photos.sort((n1,n2) => {
      if (n1.idPhoto > n2.idPhoto) {
      return 1;
      }
      if (n1.idPhoto < n2.idPhoto) {
      return -1;
      }
      return 0;
      });
      }
    updatePhoto(p:Photo) :  Observable<Photo>{
      return this.http.put<Photo>(this.apiURL, p, httpOptions);
      }
}
