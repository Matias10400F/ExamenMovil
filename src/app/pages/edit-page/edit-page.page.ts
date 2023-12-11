import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditpageService } from 'src/app/services/editpage.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {
  constructor(
    public editpage: EditpageService,
    public actRoute: ActivatedRoute
  ) {
    this.editpage.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.editpage.getPostById(this.editpage.id);
  }
}
