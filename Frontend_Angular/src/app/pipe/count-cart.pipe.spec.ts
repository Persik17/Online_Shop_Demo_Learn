import { CountCartPipe } from './count-cart.pipe';

describe('CartPipe', () => {
  it('create an instance', () => {
    const pipe = new CountCartPipe();
    expect(pipe).toBeTruthy();
  });
});
