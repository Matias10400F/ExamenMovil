import { Component, OnInit } from '@angular/core';
import { UsuarioListJsonService } from 'src/app/services/usuario-list-json.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  usuarios: any[] = [];

  constructor(private UsuarioListJson: UsuarioListJsonService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.UsuarioListJson.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  descargarUsuariosJson() {
    this.UsuarioListJson.downloadUsersJson();
  }
}
