import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Navbar2Component } from '../../components/navbar2/navbar2.component';
import { CarousalComponent } from '../../components/carousal/carousal.component';
import { ApiService } from '../../api.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe,NavbarComponent,Navbar2Component,FooterComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data:any=[]
  constructor(public api:ApiService){

  }
  ngOnInit()
  {
    this.api.getData().subscribe(response =>{
      this.data= response
    })
  }

}
