import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';

import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './reducers/pet-tag.reducer';
import { TagShapeComponent } from './components/tag-shape/tag-shape.component';
import { TagTextComponent } from './components/tag-text/tag-text.component';
import { TagExtrasComponent } from './components/tag-extras/tag-extras.component';

import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ petTag: petTagReducer})
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
