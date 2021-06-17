import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AccountComponent } from './components/account/account.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ClubpostComponent } from './components/clubpost/clubpost.component';
import { ViewClubpostsComponent } from './components/view-clubposts/view-clubposts.component';
import { AddBookclubComponent } from './components/add-bookclub/add-bookclub.component';
import { CommentComponent } from './components/comment/comment.component'
import { ClubpostcommentComponent } from './components/clubpostcomment/clubpostcomment.component';
import { BookclubdetailsComponent } from './components/bookclubdetails/bookclubdetails.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },

  {
    path: 'books',
    component: BookComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'bookclubs',
    component: BookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ClubPostDetails/:clubId/:title',
    component: BookclubComponent,
    canActivate: [AuthGuard]
  },



  {
    path: 'Explore',
    component: ExploreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Comments',
    component: CommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Feed',
    component: UserFeedComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'Addbookclub',
    component: AddBookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubpost',
    component: BookclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Viewclubpost',
    component: ViewClubpostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost',
    component: ClubpostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AddClubPost/:clubId/:BookClubTitle',
    component: ClubpostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'ClubPosts/:clubId',
    component: ClubpostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubpostcomment',
    component: ClubpostcommentComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'bookclubdetail',
    component: BookclubdetailsComponent,
    canActivate: [AuthGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
