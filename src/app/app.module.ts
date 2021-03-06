import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthComponentComponent } from './components/auth/auth-component.component';
import { AuthModule } from './components/auth/auth-module.module';
import { HttpClientModule } from '@angular/common/http';

//ngrx
import { ShipsReducer } from './store/ships.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './store/ships.effects';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AuthComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({ships: ShipsReducer}),
    EffectsModule.forRoot( [ShipsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }