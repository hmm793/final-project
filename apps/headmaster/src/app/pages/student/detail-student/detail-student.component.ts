import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'headmaster-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css'],
})
export class DetailStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  studentData: Student = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    father_name: '',
    mother_name: '',
    date_of_birth: '',
    father_occupation: '',
    blood_group: '',
    religion: '',
    email: '',
    year_academic: '',
    addmission_date: '',
    kelas: {
      _id: '',
      class_name: '',
      teacher: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
        short_bio: '',
      },
      subject: [
        {
          _id: '',
          subject_name: '',
          teacher_id: {
            _id: '',
            first_name: '',
            last_name: '',
            email: '',
            short_bio: '',
            id: '',
          },
          duration: '',
          id: '',
        },
      ],
    },
    address: '',
    phone: '',
    password: '',
    short_bio: '',
    image: '',
    role: '',
    status: '',
    subject: [
      {
        subject_name: {
          _id: '',
          subject_name: '',
          teacher_id: '',
          duration: '',
          id: '',
        },
        score_subject: '',
      },
    ],
    id: '',
  };

  idStudent: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = [params['idStudent']];
    });
    this.studentService.getStudentById(this.idStudent[0]).subscribe((hasil) => {
      this.studentData = hasil;
    });
  }
}
