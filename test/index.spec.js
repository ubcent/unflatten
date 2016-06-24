'use strict';

const cwd = process.cwd();
const expect = require('chai').expect;
const unflatten = require('../');

const nodes = [
  {id: 1, parentId: 0},
  {id: 2, parentId: 0},
  {id: 3, parentId: 1},
  {id: 4, parentId: 1},
  {id: 5, parentId: 2},
  {id: 6, parentId: 4},
  {id: 7, parentId: 5}
];

describe('Test module', () => {
  const nested = unflatten(nodes);

  it('Must be instance of Array', () => {
    expect(nested).to.be.instanceof(Array);
  });

  it('Must be an array with size 2', () => {
    expect(nested).to.have.property('length')
      .that.is.an('number')
      .that.equals(2);
  });

  it('Must have all simple properties', () => {
    expect(nested[0]).to.have.all.keys(['id', 'parentId', 'children']);
  });

  it('Must have property "children"', () => {
    expect(nested).to.have.deep.property('[0].children');
  });
});
