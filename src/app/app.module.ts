import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PremiumComponent } from './premium/premium.component';
import { PremiumCheckComponent } from './premium-check/premium-check.component';
import { EligibilityDialogComponent } from './eligibility-dialog/eligibility-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    AuthComponent,
    PremiumComponent,
    PremiumCheckComponent,
    EligibilityDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
