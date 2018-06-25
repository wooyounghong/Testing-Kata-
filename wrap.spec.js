const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns string if length omitted', () => {
    expect(wrap("omri has a dog", undefined)).to.equal("omri has a dog")
  });

  it('Breaks string accurately', ()=> {
    expect(wrap("xxxx abcd", 4)).to.equal(`xxxx\n)
  })
});

