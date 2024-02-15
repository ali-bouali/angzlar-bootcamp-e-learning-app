import { MyuppercasePipe } from './myuppercase.pipe';

describe('UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyuppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
