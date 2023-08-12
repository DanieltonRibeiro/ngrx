import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class DogService {
  constructor(
      private httpClientService: HttpClient
  ) {
  }

  getAllImagesDogsByBreed(): Observable<string[]>{
    return this.httpClientService.get<string[]>(`${environment.URL_API_DOG}breed/hound/images`)
  }
}
