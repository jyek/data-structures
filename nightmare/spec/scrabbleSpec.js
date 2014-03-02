var expect = chai.expect;
var assert = chai.assert;

describe("scrabble", function() {
  var scrabble;

  beforeEach(function() {
    scrabble = new Scrabble();
  });

  it("should contain add, contains, count and 3 hash methods as well as a storage array", function() {
    expect(scrabble.add).to.be.a('function');
    expect(scrabble.contains).to.be.a('function');
    expect(scrabble.count).to.be.a('function');
    expect(scrabble.hash[0]).to.be.a('function');
    expect(scrabble.hash[1]).to.be.a('function');
    expect(scrabble.hash[2]).to.be.a('function');
  });

});
