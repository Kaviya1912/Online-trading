import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  buyNowForm!: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private logger:LoggerService) { }

  ngOnInit(): void {

      //logger
      this.logger.log("Payment component");


    this.buyNowForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      nameOnCard: ['', [Validators.required, Validators.minLength(4)]],
      // creditCardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      creditCardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\d{4}\d{4}\d{4}$/)]],
      expiryMonth: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^([0-2][1-9]|3[0-1])$/)]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
});
}

  onSubmit() {

    if (this.buyNowForm.valid) {

      // Perform submit action here
      Swal.fire({
        title: 'Payment successful!',
        text:'Order Placed',
        icon: 'success',
        confirmButtonColor: 'green'
      });

    } else {
      Swal.fire({
        title: 'Payment failed',
        text: 'Please try again.',
        icon: 'error',
        confirmButtonColor: 'red'
});
}


  }
}

