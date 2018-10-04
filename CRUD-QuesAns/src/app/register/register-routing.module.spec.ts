import { RegisterRoutingModule } from './register-routing.module.ts';

describe('RegisterRoutingModule', () => {
  let registerRoutingModule: RegisterRoutingModule;

  beforeEach(() => {
    registerRoutingModule = new RegisterRoutingModule();
  });

  it('should create an instance', () => {
    expect(registerRoutingModule).toBeTruthy();
  });
});
