/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'student-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ForgetPasswordComponent>
  ) {}
  ngOnInit(): void {
    this._formInit();
  }

  private _formInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  reset() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const newData_2 = {
      email: this.form?.value.email,
    };
    this.studentService.resetPassword(newData_2).subscribe((res) => {
      this._snackBar.open(res.message, '', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
  close() {
    this.dialogRef.close();
  }
  get resetForm() {
    return this.form.controls;
  }
}
