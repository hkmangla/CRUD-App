import { RegisterModule } from './register.module.ts';

describe('RegisterModule', () => {
  let registerModule: RegisterModule;

  beforeEach(() => {
    registerModule = new RegisterModule();
  });

  it('should create an instance', () => {
    expect(registerModule).toBeTruthy();
  });
});
