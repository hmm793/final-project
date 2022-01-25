import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { subject } from '../../models/subject';
import { Teacher } from '../../models/teacher';
import { KelasServices } from '../../services/kelas.service';
import { SubjectService } from '../../services/subject.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'headmaster-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
})
export class AddClassComponent implements OnInit {
  selectedValue: string[];
  selectedTeacher: string[];

  allSubject: subject[];
  allTeacher: Teacher[];
  form!: FormGroup;

  constructor(
    private formbBuilder: FormBuilder,
    private kelasService: KelasServices,
    private subjectService: SubjectService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this._formInit();
    this._subjectInit();
    this._teacherInit();
  }

  private _formInit() {
    this.form = this.formbBuilder.group({
      class_name: ['', Validators.required],
      teacher_id: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  private _subjectInit() {
    this.subjectService.getAllSubjects().subscribe((subj) => {
      this.allSubject = subj;
      console.log('subj =', subj);
    });
  }
  private _teacherInit() {
    this.teacherService.getAllTeacher().subscribe((teach) => {
      this.allTeacher = teach;
      console.log('teach =', teach);
    });
  }

  submitData() {
    const kelasData = {
      class_name: this.form?.value.class_name,
      teacher: this.selectedTeacher,
      subject: this.selectedValue,
    };
    console.log('kelas data=', kelasData);
    this.kelasService.AddClass(kelasData).subscribe((res) => {
      console.log('Hasil : ', res);
    });
  }
}
