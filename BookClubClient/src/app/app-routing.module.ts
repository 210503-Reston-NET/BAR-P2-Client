import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent,
  },

  {
    path: 'books',
    component:BookComponent,
  },

  {
    path: 'bookclubs',
    component:BookclubComponent,
  },


  {
    path: 'bookclub',
    component:BookclubComponent,
  },
  {
    path: 'clubpost',
    component:BookclubComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
