import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-portefolio',
  standalone: true,
  imports: [
    PageTitleComponent
  ],
  templateUrl: './portefolio.component.html',
  styleUrl: './portefolio.component.scss'
})
export class PortefolioComponent {

}
