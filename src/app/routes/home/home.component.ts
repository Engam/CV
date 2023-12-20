import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../signals/user/user.service';
import { UserPresentationContainerComponent } from '../../components/user/user-presentation-container/user-presentation-container.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UserPresentationContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UserService
  ]
})
export class HomeComponent {

  private user = inject(UserService);
  firstname = this.user.select('firstname');
  image = this.user.select('image');
  lastname = this.user.select('lastname');
  email = this.user.select('email');
  phone = this.user.select('phone');
  github = this.user.select('github');
  

}
