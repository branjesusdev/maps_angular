import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

/**
 * DEFAULTS
 */
import { config } from 'src/environments/config';

/**
*RECURSOS
**/
import { NgxSpinnerModule } from "ngx-spinner";
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
 
/**
*PARTIALS
**/
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';

/**
 * SERVICES
 */
import { DefaultService } from 'src/app/services/default.service'

/**
*MODULES
**/
import { MapsComponent } from 'src/app/modules/maps/maps.component';   


@NgModule({
  declarations: [

    DefaultComponent,

    MapsComponent,

  ],
  imports: [

    SharedModule,

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    GoogleMapsModule,

    AgmCoreModule.forRoot({
      apiKey: config.key
    })

  ],
  providers: [

    DefaultService

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DefaultModule { }
