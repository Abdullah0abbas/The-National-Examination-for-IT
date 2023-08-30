import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { AuthModule } from '../Authintiaction/auth/auth.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    AuthModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    SliderComponent,
    RouterModule,
  ]
})
export class SharedModule { }
