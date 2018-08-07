import * as chai from 'chai';
import { isArrayEmpty } from '../src/index';

const expect = chai.expect;

describe('main', () => {
  it('array should be empty', () => {
    expect(isArrayEmpty([])).to.be.true;
  });
  it('array should NOT be empty', () => {
    expect(isArrayEmpty(['a', 'b', 'c'])).to.be.false;
  });
});
