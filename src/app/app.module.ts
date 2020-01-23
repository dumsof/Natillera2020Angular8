
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { appRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//se importa el archivo que tiene todos los modulos de material
import { MaterialModule} from './material.module';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
