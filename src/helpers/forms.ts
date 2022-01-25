import { FormErrors as FormErrorsInterface } from '@whirli-components/@types/forms';

export function getFormError(errors: FormErrorsInterface): string {
  for (const error in errors) {
    return errors[error][0];
  }
  return '';
}

export class FormErrors {
  errors: FormErrorsInterface;

  constructor() {
    this.errors = {};
  }

  clear(field: string): void {
    delete this.errors[field];
  }

  get(field: string): string | undefined {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  has(field: string): boolean {
    return this.errors[field] ? true : false;
  }

  record(errors: FormErrorsInterface): void {
    this.errors = errors;
  }
}
