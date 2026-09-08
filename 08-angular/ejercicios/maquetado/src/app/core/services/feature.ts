import { inject, Service, signal, WritableSignal } from '@angular/core';
import { ProgramaModel } from '../models/Programa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class FeatureService {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:3000/features'

  getFeatures(): Observable<ProgramaModel[]> {
    return this.httpClient.get<ProgramaModel[]>(this.apiUrl);
  }

  postFeatures(newFeature: ProgramaModel): Observable<string> {
    return this.httpClient.post<string>(this.apiUrl,newFeature);
  }

  putFeatures(updatedFeature: ProgramaModel): Observable<string> {
    return this.httpClient.put<string>(`${this.apiUrl}/${updatedFeature.id}`,updatedFeature);
  }

  deleteFeatures(idFeature: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.apiUrl}/${idFeature}`);
  }
}
