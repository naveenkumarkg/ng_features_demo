import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { UserComponent } from './user/user.component';

//3
//Add configuration
const myRoute:Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServicesComponent},
    {path:'user',component:UserComponent}

]


//2
@NgModule({
    imports:[RouterModule.forRoot(myRoute)],
    exports:[RouterModule]
})

//1
export class AppRoutingModule{

}



















// import {NgModule} from '@angular/core'
// import {Routes, RouterModule} from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';

// // 3 configuration
// const route:Routes =[
//     {path:'' , component: HomeComponent},

//     {path:'about', component: AboutComponent}

// ];

// // 2
// @NgModule({
// imports:[RouterModule.forRoot(route)],
// exports:[RouterModule]
// })

// // 1
// export class AppRoutingModule {

// }