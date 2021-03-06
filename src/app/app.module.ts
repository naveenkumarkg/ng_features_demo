import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';


// Compoenents
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ServicesComponent } from './services/services.component';
import { AboutUsService } from './apiService/about.service';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations:[AppComponent, HeaderComponent, ShowcaseComponent, NewsletterComponent, CardsComponent, FooterComponent, HomeComponent, AboutComponent, AboutUsComponent, ServicesComponent, UserComponent, EditComponent],
  providers:[AboutUsService],
  bootstrap:[AppComponent],
  imports:[BrowserModule,AppRoutingModule,HttpClientModule, BrowserAnimationsModule,DragDropModule,MatDialogModule,
    MatSliderModule,MatButtonModule,MatBadgeModule,MatCardModule,MatInputModule,FormsModule]
})
export class AppModule{


}