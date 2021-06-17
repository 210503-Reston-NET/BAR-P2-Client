import { Component, OnInit } from '@angular/core';
import { ClubComment, UserComment } from '../../models/comment'
import { UserService } from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { userPost } from '../../models/userPost';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '@auth0/auth0-angular';
import { BookclubService } from '../../services/bookclub.service'
import { CPost } from '../../models/clubPost'
import { ClubpostService } from  '../../services/clubpost.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  IsUserPost: boolean = true;
  userComments: UserComment[] = [];
  clubComments: ClubComment[] = [];
  UPost: userPost = {
    userPostId: 0,
    userEmail: "",
    user: null,
    post: "",
    totalLike: 0,
    totalDislike: 0,
    date: "2021-06-15T23:25:22.125"
  }

  CPost: CPost = {
    clubPostId: 0,
    userEmail: "",
    user: null,
    post: "",
    bookClubId: 0,
    bookClub: null,
    totalLike: 0,
    totalDislike: 0,
    date: ""
  }

  uComment: UserComment ={
    userCommentId: 0,
    userEmail: "",
    user: null,
    userPostId: 0,
    userPost: null,
    message: ""
  }

  cComment: ClubComment ={
    clubCommentId: 0,
    userEmail: "",
    user: null,
    clubPostID: 0,
    clubPost: null,
    message: ""
  }

  userPostId: number = 0;
  ClubPostId: number = 0;

  constructor(private bookClubapi: BookclubService, private clubPostService: ClubpostService ,private commentService: CommentService, private userService: UserService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.auth.user$.subscribe(act => {
          this.uComment.userEmail = act?.email!;
          this.cComment.userEmail = act?.email!;
        });
        this.userPostId = params.UserPostId;
        this.ClubPostId = params.ClubPostId;
        if (this.ClubPostId < 1){
          this.IsUserPost = true;
          this.uComment.userPostId = params.UserPostId;
          this.commentService.GetUserComment(params.UserPostId).then(cmts => this.userComments = cmts);
          this.userService.GetPostById(params.UserPostId).then(pst => this.UPost = pst);
        }
        else{
          this.IsUserPost = false;
          this.cComment.clubPostID = params.ClubPostId;
          this.commentService.GetClubComment(params.ClubPostId).then(cmts => this.clubComments = cmts);
          this.clubPostService.GetClubPostById(params.ClubPostId).then(pst => this.CPost = pst);
        }
      }
    )
  }

  onSubmit(): void {
    if (this.IsUserPost){
      console.log(this.uComment);
      this.commentService.AddUserComment(this.uComment).then(cmt => {
          console.log(cmt);
          this.commentService.GetUserComment(this.userPostId).then(cmts => this.userComments = cmts);
        });
    }
    else{
      console.log(this.cComment);
      this.commentService.AddClubComment(this.cComment).then(cm => {
        console.log(cm);
        this.commentService.GetClubComment(this.ClubPostId).then(cmts => this.clubComments = cmts);
      });
    }

  }

}
