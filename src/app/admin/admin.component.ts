import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { InvestorModel } from './admin-dashboard model';
import { ApiService } from '../shared/api.service';
import { subscribeOn } from 'rxjs';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formValue !:FormGroup;
  investorModelobj : InvestorModel = new InvestorModel();
  investorData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;



  constructor(private formbuilder: FormBuilder,private logger:LoggerService,
    private api : ApiService ) {}


  ngOnInit() {
    this.formValue=this.formbuilder.group({
      username : [''],
      email :[''],
      mobile :[''],
      stockinvested :[''],
      amount :['']
    })

    this.getAllInvestor();
  }



  clickAddInvestor(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postInvestorDetails(){
    this.investorModelobj.username = this.formValue.value.username;
    this.investorModelobj.email = this.formValue.value.email;
    this.investorModelobj.mobile = this.formValue.value.mobile;
    this.investorModelobj.stockinvested = this.formValue.value.stockinvested;
    this.investorModelobj.amount = this.formValue.value.amount;

    this.api.postInvestor(this.investorModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Investor added sucessfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllInvestor();
    },err=>
    alert("Something went wrong")
    )

  }
  getAllInvestor(){
    this.api.getInvestor()
    .subscribe(res=>{
      this.investorData = res;
    })
  }
  deleteInvestor(row : any){
    this.api.deleteInvestor(row.id)
    .subscribe(res=>{
      alert("investor Deleted");
      this.getAllInvestor();
    })
  }

  onEdit(row : any){
    this.showAdd=false;
    this.showUpdate=true;

    this.investorModelobj.id=row.id;
    this.formValue.controls['username'].setValue(row.username);
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['stockinvested'].setValue(row.stockinvested)
    this.formValue.controls['amount'].setValue(row.amount)
  }

  updateInvestorDetails(){
    this.investorModelobj.username = this.formValue.value.username;
    this.investorModelobj.email = this.formValue.value.email;
    this.investorModelobj.mobile = this.formValue.value.mobile;
    this.investorModelobj.stockinvested = this.formValue.value.stockinvested;
    this.investorModelobj.amount = this.formValue.value.amount;

    this.api.updateInvestor(this.investorModelobj, this.investorModelobj.id)
    .subscribe(res=>{
      alert("Updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllInvestor();
    })
  }

}
