import { TodotasksModule } from './todotasks.module';

describe('TodotasksModule', () => {
  let todotasksModule: TodotasksModule;

  beforeEach(() => {
    todotasksModule = new TodotasksModule();
  });

  it('should create an instance', () => {
    expect(todotasksModule).toBeTruthy();
  });
});
