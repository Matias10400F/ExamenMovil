import { Component, OnInit } from '@angular/core';
import { AddpostService } from 'src/app/services/addpost.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage  {
  constructor(public addPostp: AddpostService) {}

}

  

