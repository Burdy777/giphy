import { FormInputsModule } from './form-inputs.module';

describe('FormInputsModule', () => {
  let formInputsModule: FormInputsModule;

  beforeEach(() => {
    formInputsModule = new FormInputsModule();
  });

  it('should create an instance', () => {
    expect(formInputsModule).toBeTruthy();
  });
});
