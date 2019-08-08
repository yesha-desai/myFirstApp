// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from 'src/app/directive/directive.component';
import { PipecomponentComponent } from 'src/app/pipecomponent/pipecomponent.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ComponentBComponent } from 'src/app/component-b/component-b.component';



const routes: Routes = [
  {path:'directive', component:DirectiveComponent},
  {path:'home', component:HomeComponent,data : {homedata : 'welcome to home'}},
  {path:'pipecomponent', component:PipecomponentComponent},
  {path:'b', component:ComponentBComponent},
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [DirectiveComponent,HomeComponent,PipecomponentComponent,ComponentBComponent];
