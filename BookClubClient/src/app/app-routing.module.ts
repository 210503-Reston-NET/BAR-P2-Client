import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent,
  },

  {
    path: 'books',
    component:BookComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'bookclubs',
    component:BookclubComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'Profile',
    component:ProfileComponent,
    canActivate: [AuthGuard]
  },


  {
    path: 'bookclub',
    component:BookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubpost',
    component:BookclubComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
