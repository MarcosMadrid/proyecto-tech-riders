import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProvider, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServicePrincipal } from './services/service.principal';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilusuarioComponent,
    LogoutComponent,
    MenuComponent,
    EditarusuarioComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [appRoutingProvider, ServicePrincipal],
  bootstrap: [AppComponent],
})
export class AppModule {}
