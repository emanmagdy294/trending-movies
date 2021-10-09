import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { loginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path:'' , redirectTo:'home' , pathMatch:'full'},
{path:'home' , canActivate:[AuthGuard], component:HomeComponent},
{path:'about' ,canActivate:[AuthGuard], component:AboutComponent},
{
  path: 'settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},
{path:'movies' ,canActivate:[AuthGuard], component:MoviesComponent},
{path:'tv' , canActivate:[AuthGuard],component:TvComponent},
{path:'moviedetails/:id' , canActivate:[AuthGuard],component:MoviedetailsComponent},
{path:'login' ,  component:loginComponent},
{path:'network' , canActivate:[AuthGuard],component:NetworkComponent},
{path:'Register' , component:RegisterComponent},
{path:'people' , canActivate:[AuthGuard],component:PeopleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
