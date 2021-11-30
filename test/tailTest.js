const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {
  it('returns 1 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['yoyo'] for ['yoyo', 'yoyo']", () => {
    assert.deepEqual(tail(['yoyo', 'yoyo']), ['yoyo']); 
  });

  it("returns []] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

});
