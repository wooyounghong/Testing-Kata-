const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('TwoSum', () => {
  it('Returns empty array if no input', () => {
    expect(twoSum([], 2)).to.deep.equal([]);
  });
  it('Returns empty array if no target val', () => {
    expect(twoSum([1, 2])).to.deep.equal([]);
  })
  it('calculates correctly,', () => {
    expect(twoSum([1, 2, 4, 6], 10)).to.deep.equal([2, 3]);
  })
});