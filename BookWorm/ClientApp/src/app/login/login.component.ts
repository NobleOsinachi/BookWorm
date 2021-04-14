import { Component } from '@angular/core';
import { Email, Password } from '../../typings';

@Component({
  selector: 'login',
  //  template: `
  //<a _ngcontent-ng-cli-universal-c46=""
  //class="nav-link text-dark"
  //ng-reflect-router-link="/counter"
  //href="/">Courses</a>

  //<h2>Login Page</h2>
  //<div>
  //<label for="email">Email Address: </label>
  //<input type="text" name="email"


  //value="{{email}}"

  ///>
  //</div>
  //<div

  //>
  //</div>

  //<div>
  //<label for="password">Password: </label>
  //<input type="text"
  //name="password"

  //value="{{password}}" />
  //</div>
  //<p>
  //email = {{email}}
  //</p>
  //<p>
  //password = {{password}}
  //</p>
  //<br  />
  //<button class="btn btn-info">Submit</button>

  //`,
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**constructor( private userService: UserService, private auth: AuthService, router: Router ) {auth.user$.subscribe(user => {if (!user) return; userService.save(user);let returnUrl = localStorage.getItem('returnUrl');if (!returnUrl) return; localStorage.removeItem('returnUrl');router.navigateByUrl(returnUrl);});}**/

  email: Email = "";
  emailPlaceholder: Email = "email@domain.com";
  password: Password = "";
  //del: string = null;
  onKeyUp() {
    alert(this.email);

  }

}
