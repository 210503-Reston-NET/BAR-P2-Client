import { Component, OnInit } from '@angular/core';
import { comment } from '../../models/comment'
import { UserService } from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { userPost } from '../../models/userPost';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: comment[] = [];
  UPost: userPost = {
    id: 0,
    email: "",
    post: "",
    totalLike: 0,
    totalDislike: 0
  }

  comment: comment ={
    id: 0,
    email: "",
    userPostId: 0,
    clubPostId: 0,
    message: ""
  }

  userPostId: number = 0;
  ClubPostId: number = 0;

  constructor(private commentService: CommentService, private userService: UserService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.auth.user$.subscribe(act => this.comment.email = act?.email!);
        this.comment.clubPostId = params.ClubPostId;
        this.comment.userPostId = params.UserPostId;
        this.userPostId = params.UserPostId;
        this.ClubPostId = params.ClubPostId;
        if (this.ClubPostId < 1){
          this.userService.GetComments(params.UserPostId).then(cm => this.comments = cm);
          this.userService.GetPostById(this.userPostId).then(pst => this.UPost = pst);
        }
      }
    )
  }

  onSubmit(): void {
    this.commentService.AddComment(this.comment).then(cmt => console.log(cmt));
  }

}