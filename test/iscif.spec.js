// Filename: iscif.spec.js  
// Timestamp: 2014.04.20-16:38:53 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var iscif = require('../iscif');

describe("iscif", function () {

  it("should return `true` for 'A58818501'", function () {  
    expect( iscif('A58818501') ).toBe( true );
  });

  it("should return `true` for 'B-86271723'", function () {  
    expect( iscif('B-86271723') ).toBe( true );
  });

  it("should return `false` for 'invalid'", function () {  
    expect( iscif('invalid') ).toBe( false );
  });

});
