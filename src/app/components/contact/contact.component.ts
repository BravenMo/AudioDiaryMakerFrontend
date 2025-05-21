import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private targetElement: HTMLElement | null = null;
    private isAnimated: boolean = false;
  
    constructor(private el: ElementRef) {}
  
    ngOnInit(): void {
      this.targetElement = this.el.nativeElement.querySelector('#formContent');
      this.checkVisibility();  // Check initially in case it is already in view
    }
  
    @HostListener('window:scroll', [])
    onScroll(): void {
      this.checkVisibility();
    }
  
    private checkVisibility(): void {
      if (this.targetElement && !this.isAnimated) {
        const rect = this.targetElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight * 0.8) {  // 80% of the viewport height
          this.targetElement.classList.add('animate-slide-in');
          this.targetElement.classList.remove('hidden-slide');
          this.isAnimated = true;  // Prevents multiple triggers
        }
      }
    }
  
    ngOnDestroy(): void {
      // Clean up listeners when component is destroyed
      window.removeEventListener('scroll', this.onScroll);
    }
  
}
