import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ClubpostComponent } from './components/clubpost/clubpost.component';
import { ViewClubpostsComponent } from './components/view-clubposts/view-clubposts.component';
import { AddBookclubComponent } from './components/add-bookclub/add-bookclub.component';

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
    path: 'Addbookclub',
    component:AddBookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubpost',
    component:BookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Viewclubpost/:clubId/:BookClubTitle',
    component:ViewClubpostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost/:clubId/:BookClubTitle',
    component:ClubpostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost/:clubId/:BookClubTitle',
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
