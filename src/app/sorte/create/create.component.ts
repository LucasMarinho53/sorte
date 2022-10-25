import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SorteModel } from './model/sorte.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  random: number | undefined;
  SorteForm!: FormGroup;
  Sorte!: SorteModel | undefined;
  Resultado: string | undefined

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.SorteForm = this.formBuilder.group({chute: ['', Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)],});
  }

  getRandomInt(): number {
    return this.random = (Math.floor(Math.random() * 100 + 1));
  }

  inputValidar(): string{
    const sort = this.SorteForm.getRawValue() as SorteModel;

    if(sort.chute == this.random){
      return this.Resultado = "Acertou, o número é "+this.random;
    } else{
      return this.Resultado = "Errou, o número é "+this.random;
    }
  }

  get chute() { return this.SorteForm.get('chute')!; }

}
