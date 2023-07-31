import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SPersonService } from 'src/app/services/personService/s-person.service';
import { utilisateur } from 'src/app/Classes/utilisateur';
import { SAuthentificationService } from "../../services/authService/s-authentification.service";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { error } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  cookieValue: any;
  connexionMessage: string;
  mailPwd_err: boolean;
  person: utilisateur;
  loginForm: FormGroup;
  
  constructor(private cookieService: CookieService, private router: Router, private formBuilder: FormBuilder, private sperson: SPersonService, private authService: SAuthentificationService) {
    this.loginForm = this.formBuilder.group({
      u_mail: ['', [Validators.required, Validators.email]],
      u_pwd: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.mailPwd_err = false;
    this.person = new utilisateur();
    this.connexionMessage = '';
  }

  champValide(champ: string): string{
    if(this.loginForm.get(champ)?.invalid && this.loginForm.get(champ)?.touched){
      return 'is-invalid';
    }

    if (this.loginForm.get(champ)?.valid && this.loginForm.get(champ)?.touched){
      return 'is-valid';
    }
    return '';
  }

  onSubmit() {
    this.person.u_mail = this.loginForm.get('u_mail')?.value;
    this.person.u_pwd = this.loginForm.get('u_pwd')?.value;
    
    this.sperson.connecter_utilisateur(this.person).subscribe(
      (data: any) => {
        if(data.success){
          this.authService.setToken(data.token);
          //const u_token = this.authService.decodeToken(data.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.connexionMessage = data.message;
          this.mailPwd_err = true;
        }
      },
      (err: any) => {
        console.log(err.message);
        this.connexionMessage = 'Une erreur est survenue.'
        this.mailPwd_err = true;
      }
    );
  }
}
