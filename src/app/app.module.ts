import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EmployeeService } from 'src/app/employee.service';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ComponentAComponent,
    ComponentBComponent,
    HeroParentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
