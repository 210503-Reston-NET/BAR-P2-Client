import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { ClubpostComponent } from './components/clubpost/clubpost.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './components/auth/auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AccountComponent } from './components/account/account.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddBookclubComponent } from './components/add-bookclub/add-bookclub.component';
import { CommentComponent } from './components/comment/comment.component';
import { ClubpostcommentComponent } from './components/clubpostcomment/clubpostcomment.component';
import { DataTablesModule } from 'angular-datatables';
import { BookclubdetailsComponent } from './components/bookclubdetails/bookclubdetails.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    BookComponent,
    BookclubComponent,
    ClubpostComponent,
    WelcomeComponent,
    HeaderComponent,
    SidemenuComponent,
    AuthComponent,
    ProfileComponent,
    AddBookclubComponent,
    ExploreComponent,
    AccountComponent,
    CommentComponent,
    ClubpostcommentComponent,
    BookclubdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.DOMAIN,
      clientId: environment.CLIENTID
    }),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
