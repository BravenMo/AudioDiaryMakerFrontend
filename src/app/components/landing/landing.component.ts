import { Component, Inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HomeComponent,AboutComponent,ContactComponent,FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
}
