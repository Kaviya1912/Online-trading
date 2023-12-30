import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

import { MutualComponent } from './mutual/mutual.component';

import { UsstocksComponent } from './usstocks/usstocks.component';
import { IndstocksComponent } from './indstocks/indstocks.component';
import { StocksComponent } from './stocks/stocks.component';
import { IndexComponent } from './index/index.component';
import { PaymentComponent } from './payment/payment.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { AhomeComponent } from './ahome/ahome.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ListComponent } from './list/list.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      NavbarComponent,
      LoginComponent,
      SignupComponent,
      DetailsComponent,
      HomeComponent,
      AboutusComponent,
      ContactComponent,
      AdminComponent,
      PaymentComponent,
      MutualComponent,
      UsstocksComponent,
      IndstocksComponent,
      StocksComponent,
      IndexComponent,
      PaymentComponent,
      MyOrdersComponent,
      FooterComponent,
      ProfileComponent,
      ForgetpasswordComponent,
      AdminpanelComponent,
      ListComponent,
      ResetpasswordComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // LoggerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
