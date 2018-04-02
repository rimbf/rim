import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard} from './services/authenticationGuard.service';



export const appRoutes: Routes = [
   {path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard] } ,
   {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]  } ,
   {path: 'upload', component: UploadComponent , canActivate: [AuthenticationGuard] } ,
   {path: 'login', component: LoginComponent } ,
   {path: '', redirectTo: '/gallery' , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }