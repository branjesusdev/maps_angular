import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
*PARTIALS
**/
import { AppComponent } from 'src/app/app.component';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,

      DefaultModule,
      AppRoutingModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
