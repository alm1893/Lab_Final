import { Socio } from './socio.model';

describe('Socio', () => {
  it('should create an instance', () => {
    expect(new Socio('','',0,'','','')).toBeTruthy();
  });
});
