var {expect} = require('chai');
var {app} = require('../src/app.js');

describe("Table app", function() {

  var input = [
    {
      "Publication_Date": "29/08/1955",
      "Title": "Not Lord of the Rings, something completely different",
      "Authors": "Nobody knew what JR stood for"
    }
  ]


  it("The length of the title is 30", function() {
    console.log(input[0])
    app.displayTable(input[0]);
    expect(title.length).to.equal(30);
  });

})
