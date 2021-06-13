import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ClubpostComponent } from './components/clubpost/clubpost.component';
import { ViewClubpostsComponent } from './components/view-clubposts/view-clubposts.component';

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
    path: 'bookclub',
    component:BookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Viewclubpost/:clubId/:BookClubTitle/:token',
    component:ViewClubpostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost/:clubId/:BookClubTitle/:token',
    component:ClubpostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost/:clubId/:BookClubTitle/:token',
    component:ClubpostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'ClubPosts/:clubId',
    component:ClubpostComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
