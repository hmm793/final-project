import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parent } from '../../../models/parent';
import { ParentService } from '../../../services/parent.service';

@Component({
  selector: 'headmaster-detail-parent',
  templateUrl: './detail-parent.component.html',
  styleUrls: ['./detail-parent.component.css'],
})
export class DetailParentComponent implements OnInit {
  idUser: any;
  constructor(
    private parentService: ParentService,
    private route: ActivatedRoute
  ) {}
  parentData: Parent;
  ngOnInit(): void {
    this._parentInit();
  }

  private _parentInit() {
    this.route.params.subscribe((params) => {
      this.idUser = [params['idParent']];
    });
    this.parentService.getParentById(this.idUser).subscribe((res) => {
      this.parentData = res;
    });
  }
}
