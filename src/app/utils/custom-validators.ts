import { AbstractControl } from '@angular/forms';

// FormControl
// FormArray
// FormGroup

export function noHomeroValidator(formControl: AbstractControl) {
  if (
    typeof formControl.value === 'string' &&
    formControl.value.toLowerCase().includes('homero')
  ) {
    return {
      noHomeroError: 'No se admiten Homeros',
    };
  }

  // Si retornan null significa que el campo es VALIDO
  return null;
}

export function noPhoneNumberValidator(control: AbstractControl) {
  
  const phoneNumberRegex = /^[0-9]{10,14}$/; // Patrón regex para un número de teléfono de 10 dígitos

  if (!phoneNumberRegex.test(control.value)) {
    return { NoPhoneNumberError: 'El número de teléfono ingresado no es válido' };
  }
  // Si retorna null significa que el campo es VALIDO
  return null;
}

