import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { noHomeroValidator, noPhoneNumberValidator } from '../../utils/custom-validators';



interface Provincia {
  id: number;
  name: string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  userFormGroup: FormGroup;

  // provincias: string[] = ['Buenos Aires', 'Neuquen', 'Cordoba'];
  provincias: Provincia[] = [
    {
      id: 1,
      name: 'Buenos Aires',
    },
    {
      id: 2,
      name: 'Catamarca',
    },
    {
      id: 3,
      name: 'Chaco',
    },
    {
      id: 4,
      name: 'Chubut',
    },
    {
      id: 5,
      name: 'Córdoba',
    },
    {
      id: 6,
      name: 'Corrientes',
    },
    {
      id: 7,
      name: 'Entre Ríos',
    },
    {
      id: 8,
      name: 'Formosa',
    },
    {
      id: 9,
      name: 'Jujuy',
    },
    {
      id: 10,
      name: 'La Pampa',
    },
    {
      id: 11,
      name: 'La Rioja',
    },
    {
      id: 12,
      name: 'Mendoza',
    },
    {
      id: 13,
      name: 'Misiones',
    },
    {
      id: 14,
      name: 'Neuquén',
    },
    {
      id: 15,
      name: 'Río Negro',
    },
    {
      id: 16,
      name: 'Salta',
    },
    {
      id: 17,
      name: 'San Juan',
    },
    {
      id: 18,
      name: 'San Luis',
    },
    {
      id: 19,
      name: 'Santa Cruz',
    },
    {
      id: 20,
      name: 'Santa Fe',
    },
    {
      id: 21,
      name: 'Santiago del Estero',
    },
    {
      id: 22,
      name: 'Tierra del Fuego',
    },
    {
      id: 23,
      name: 'Tucumán',
    }

  ];

  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({
      nombreApellido: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(2),
        noHomeroValidator,
      ]),

      phoneNumber: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
        noPhoneNumberValidator,
      ]),

      lastName: this.formBuilder.control('', [Validators.required]),

      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),

      comentarios: this.formBuilder.control('', [
        Validators.required,
      ]),
      
      location: this.formBuilder.group({
        calle: this.formBuilder.control(''),
        entreCalle: this.formBuilder.control(''),
        localidad: this.formBuilder.control(''),
        numero: this.formBuilder.control(''),
        piso:  this.formBuilder.control(''),
        dpto: this.formBuilder.control(''),
        state: this.formBuilder.control(''),
        codPostal: this.formBuilder.control(''),
        acceptTerms: this.formBuilder.control(false),
      }),
    });

    // this.formBuilder.control();
    // this.formBuilder.array();
  }

  getErrors(formControlName: string): ValidationErrors | null | undefined {
    return this.userFormGroup.get(formControlName)?.errors;
  }

  applyValidationStyleClass(formControlName: string): string {
    const control = this.userFormGroup.get(formControlName);
    if (control?.touched) {
      if (control?.invalid) {
        return 'is-invalid';
      } else {
        return 'is-valid';
      }
    }
    return '';
  }

  onSubmit(): void {
    if (this.userFormGroup.invalid) {
      // marcar todos los controles del formulario como que se han tocado
      this.userFormGroup.markAllAsTouched();
    } else {
      console.log(this.userFormGroup.value);
    }
  }
}