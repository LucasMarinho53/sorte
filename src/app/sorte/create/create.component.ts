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
  Sorte: SorteModel | undefined;
  Resultado: string | undefined

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    chute: [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)]
  }

  getRandomInt(): number {
    return this.random = (Math.floor(Math.random() * 100 + 1));
  }

  inputValidar(): string{


    if(this.Sorte == this.random){
      return this.Resultado = "Acertou";
    } else{
      return this.Resultado = "Errou";
    }
  }

}
