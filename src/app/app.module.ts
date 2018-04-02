import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';


import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { UploadService } from './services/upload.service';
import { ImageService } from './services/image.service';
import { appRoutes } from './routes';
import { environment } from '../environments/environment';
import { ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';
@NgModule({

  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    UploadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ToasterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthenticationGuard, AuthenticationService, UploadService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
