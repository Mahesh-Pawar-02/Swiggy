import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent 
{
  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {}

  signUp(data:SignUp):void
  {
    this.seller.userSignUp(data)
  }
}
