/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'headmaster-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css'],
})
export class DetailTeacherComponent implements OnInit {
  idUser?: any;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) {}
  teacherData: Teacher = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    blood_group: '',
    religion: '',
    email: '',
    addmission_date: '',
    address: '',
    phone: '',
    short_bio: '',
    image: '',
    role: '',
    kelas: {
      _id: '',
      class_name: '',
    },
    Subject: [
      {
        subject_name: '',
      },
    ],
  };
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idUser = [params['idTeacher']];
    });
    this.teacherService.getTeacherByID(this.idUser[0]).subscribe((res) => {
      this.teacherData = res;
    });
  }
}
