import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { IndstocksComponent } from './indstocks/indstocks.component';
import { MutualComponent } from './mutual/mutual.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { PaymentComponent } from './payment/payment.component';
import { PaymentComponent } from './payment/payment.component';
import { UsstocksComponent } from './usstocks/usstocks.component';
import { StocksComponent } from './stocks/stocks.component';
import { IndexComponent } from './index/index.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  { path:'',redirectTo:'index',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'home',component:HomeComponent},
  { path:'aboutus',component:AboutusComponent},
  { path:'admin',component:AdminComponent},
  { path:'contact',component:ContactComponent},
  { path:'details',component:DetailsComponent},
  { path:'indstocks',component:IndstocksComponent},
  { path:'mutual',component:MutualComponent},
  { path:'navbar',component:NavbarComponent},
  // { path:'payment',component:PaymentComponent},
  {path:'payment',component:PaymentComponent},
  { path:'usstocks',component:UsstocksComponent},
  { path:'stocks',component:StocksComponent},
  { path:'index',component:IndexComponent},
  { path:'my-orders',component:MyOrdersComponent},
  { path:'footer',component:FooterComponent},
  { path : 'profile',component:ProfileComponent},
  { path : 'list',component:ListComponent},
  { path:'forgetpassword',component:ForgetpasswordComponent },
  { path:'resetpassword',component:ResetpasswordComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
