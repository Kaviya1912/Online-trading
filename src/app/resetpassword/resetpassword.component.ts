import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  showPopup: boolean = false;
  resetPasswordForm: any;


  onSubmit() {

    if (this.resetPasswordForm.valid && this.confirmPassword === this.newPassword) {
      this.showPopup = true;
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

  closePopup() {
    this.showPopup = false;
    this.newPassword = '';
    this.confirmPassword = '';
    this.resetPasswordForm.resetForm();
  }
}
