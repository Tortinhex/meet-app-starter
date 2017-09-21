import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from './radio-option.model';

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() options: RadioOption[];

    value: any;

    onChange: any;

    constructor() { }

    ngOnInit() {
    }

    setValue(value: any): void {
        this.value = value;
        this.onChange(this.value);
    }

    /**
     * Write a new value to the element
     * Chamado pelas diretivas quando ele quer passar um valor ao componente
     * @param obj 
     */
    writeValue(obj: any): void {
        this.value = obj;
    }

    /**
     * Set the function to be called when the control receives a change event
     * Passa uma funcao que tem q ser chamada sempre que o valor do componente mudar
     * @param fn 
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {}

    setDisabledState?(isDisabled: boolean): void {}

}
