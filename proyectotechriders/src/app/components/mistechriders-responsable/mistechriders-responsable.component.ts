import { Component, OnInit } from '@angular/core';
import { ServicePrincipal } from 'src/app/services/service.principal';
import { Router } from '@angular/router';
import { techRider } from 'src/app/models/techRider';
import { DetallesCharlas } from 'src/app/models/DetallesCharlas';
@Component({
  selector: 'app-mistechriders-responsable',
  templateUrl: './mistechriders-responsable.component.html',
  styleUrls: ['./mistechriders-responsable.component.css'],
})
export class MistechridersResponsableComponent implements OnInit {
  public usuarios: techRider[] = [];
  public idempresa!: number;
<<<<<<< HEAD
  public charlas:DetallesCharlas[]=[]
  constructor(private _service: ServicePrincipal, private _router: Router) { }
=======
  public usuariosCargados: boolean = false;

  constructor(private _service: ServicePrincipal, private _router: Router) {}
>>>>>>> 48db44e46113576f0b55d12282e4551515ce73e0
  ngOnInit(): void {
    this._service.getdatosusuarioparaidempresa().subscribe((response) => {
      this.idempresa = response;
      console.log('el id de empresa:' + response.idEmpresaCentro);

<<<<<<< HEAD
      this._service.getMisTechRidersResponsable(response.idEmpresaCentro).subscribe((response) => {
        this.usarios = response
        console.log(response[1].nombre)
      })

      this._service.getCharlasTechResponsable(response.idEmpresaCentro).subscribe((response)=>{
        this.charlas=response
        console.log("charlasdsadsad"+response)
      })
    })
=======
      this._service
        .getMisTechRidersResponsable(response.idEmpresaCentro)
        .subscribe((response) => {
          this.usuarios = response;
          this.usuariosCargados = true;
          console.log(response[1].nombre);
        });
    });
>>>>>>> 48db44e46113576f0b55d12282e4551515ce73e0
  }
}