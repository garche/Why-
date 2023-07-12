import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteReuseStrategy, RouterModule, Routes } from "@angular/router";
import { FirstComponent } from './first/first.component';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MainComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot({
      backButtonText: '',
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
