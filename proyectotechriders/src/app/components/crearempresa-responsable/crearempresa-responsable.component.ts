import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Provincia } from 'src/app/models/Provincia';
import { ServicePrincipal } from 'src/app/services/service.principal';
import { Router } from '@angular/router';
import { EmpresaCentro } from 'src/app/models/EmpresaCentro';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crearempresa-responsable',
  templateUrl: './crearempresa-responsable.component.html',
  styleUrls: ['./crearempresa-responsable.component.css']
})
export class CrearempresaResponsableComponent implements OnInit{

  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('direccion') direccion!: ElementRef;
  @ViewChild('telefono') telefono!: ElementRef;
  @ViewChild('personaContacto') personaContacto!: ElementRef;
  @ViewChild('cif') cif!: ElementRef;
  @ViewChild('selectprovincia') selectprovincia!: ElementRef;
  @ViewChild('razonSocial') razonSocial!: ElementRef;


  public provincias!: Provincia[];
  constructor(private _service: ServicePrincipal, private _router: Router) {}
ngOnInit(): void {
  this._service.getProvincias().subscribe((response) => {
    this.provincias = response;
  });

}


registerEmpresa(): void{

let empresa:EmpresaCentro={
   idEmpresaCentro:1000 ,
   nombre:this.nombre.nativeElement.value ,
   direccion:this.direccion.nativeElement.value ,
   telefono:this.telefono.nativeElement.value ,
   personaContacto:this.personaContacto.nativeElement.value ,
   cif:this.cif.nativeElement.value ,
   idProvincia:this.selectprovincia.nativeElement.selectedOptions[0].value ,
   idTipoEmpresa: 1,
   estadoEmpresa: 0,
   razonSocial:this.razonSocial.nativeElement.value 
}


this._service.createEmpresa(empresa).subscribe((response) => {
  let idEmpresa = response.idEmpresaCentro;
  this._service.createPeticionAltaEmpresa(idEmpresa).subscribe((response) => {
    Swal.fire({
      color: '#333333',
      icon: 'success',
      showConfirmButton: false,
      text: 'Empresa creada. Tendrá que ser validado por el administrador',
      timer: 4000,
      timerProgressBar: true,
      title: 'Registro con éxito',
    }).then((result) => {
      this._router.navigate(['/usuario/perfil']);
    });
  });
});


}
}
