import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitDataService {

  constructor() { }

  private formData!: FormGroup;

  setFormData(formData: FormGroup): void {
    this.formData = formData;
  }

  getFormData(): FormGroup {
    return this.formData;
  }
}
