var {expect} = require('chai');
var App = require('../src/app.js');

describe("Table app", function() {
  it("Output is formatted", function() {
    // Arrange
    var input = [
      {
        "Publication_Date": "29/08/1955",
        "Title": "Not Lord of the Rings, something completely different",
        "Authors": "Nobody knew what JR stood for"
      }
    ]  
    let expected = "| Pub Date     |                          Title | Authors               |\n|=======================================================================|\n\r| 29 Aug 1955  | Not Lord of the Rings, som ... | Nobody knew what  ... |\n";
    let app = new App();

    // Act
    let actual = app.displayTable(input);

    // Assert
    expect(actual).to.equal(expected);
  });
})
