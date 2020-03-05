import { AbstractControl } from '@angular/forms'; // recoge el valor actual de una variable
export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log (value);
        if (value > 1000) {
            return {price_invalid: true};
        }
        return null;
    }
}

