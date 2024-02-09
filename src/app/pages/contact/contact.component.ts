import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Navbar2Component } from '../../components/navbar2/navbar2.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarousalComponent } from '../../components/carousal/carousal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,Navbar2Component,FooterComponent,CarousalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
