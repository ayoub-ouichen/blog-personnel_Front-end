import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { utilisateur } from 'src/app/Classes/utilisateur';
import { SPersonService } from 'src/app/services/personService/s-person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  formi: FormGroup;
  person: utilisateur;
  mail_message: String;
  visiblty1: boolean;
  visiblty2: boolean;

  constructor(private s_person: SPersonService, private formBuilder: FormBuilder) { 
    this.visiblty1 = false;
    this.visiblty2 = false;
    this.mail_message = "";
    this.person = new utilisateur();
    this.formi = this.formBuilder.group({
      u_nom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      u_mail: ['', [Validators.required, Validators.email]],
      u_pwd: ['', [Validators.required, Validators.minLength(6)]],
      u_pwd2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  password_confirmation():boolean{
    if (this.formi.get('u_pwd')?.value == this.formi.get('u_pwd2')?.value) {
      return true;
    }else{
      return false;
    }
  }

  champValide(champ: string): string{
    if(this.formi.get(champ)?.invalid && this.formi.get(champ)?.touched){
      return 'is-invalid';
    }

    if(!this.password_confirmation() && champ == 'u_pwd2' && this.formi.get(champ)?.touched) {
      return 'is-invalid';
    }

    if (this.formi.get(champ)?.valid && this.formi.get(champ)?.touched){
      return 'is-valid';
    }
    return '';
  }

  onSubmit(){
    this.mail_message = '';
    
    this.person.u_nom = this.formi.get('u_nom')?.value;
    this.person.u_mail = this.formi.get('u_mail')?.value;
    this.person.u_pwd = this.formi.get('u_pwd')?.value;

    this.s_person.ajouter_utilisateur(this.person).subscribe(
      // on plus si par succes alors redirecter vers la DASHBOARD
      (data: any) => {
        if (data.success) {
          this.visiblty1 = true;
          this.visiblty2 = false;
        } else {
          this.visiblty2 = true;
          this.visiblty1 = false;
        }
      }, error => {
        console.log(error);
      }
    );
  }
}
