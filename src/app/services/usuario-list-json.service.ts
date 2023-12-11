import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioListJsonService {

  constructor(private registroService: RegistroService) { }

  getUsers(): Observable<any[]> {
    return this.registroService.getUsers();
  }

  downloadUsersJson() {
    this.registroService.downloadUsersJson();
  }
}
