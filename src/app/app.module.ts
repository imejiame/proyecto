import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { ApplicationConfig, NgModule } from '@angular/core';
//import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';
//import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//import { FormControl, ReactiveFormsModule} from '@angular/forms'; 
//import { AppComponent } from './app.component';
//import { LoginComponent } from './vistas/login/login.component';
//import bootstrap from '../main.server';

//export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes), provideClientHydration()]
//};


//imports: [
//    BrowserModule,
//    FormControl,
//    ReactiveFormsModule
    //ReactiveFormsModule,
    //FormsModule,
//  ]