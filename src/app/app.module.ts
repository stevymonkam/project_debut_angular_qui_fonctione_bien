import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";

import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthentificationInterceptor } from './security/authentification.interceptor';
import { AuthService } from './service/auth/auth.service';
import { ConfigService } from './service/config/config.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
   

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
  
 
    // angular material modules
    
   
    ToastrModule.forRoot(),
  ],
  providers: [
    HttpClientModule,
    ConfigService,
   
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthentificationInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
  exports: [
   
    BrowserAnimationsModule,
    // angular material modules
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

