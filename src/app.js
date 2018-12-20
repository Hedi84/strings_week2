const moment = require('moment');

class App {
  constructor() {}

  pickLength(type) {
    var titleLength = "==============================".length
    var authorLength = "=====================".length
    var usedLength
    switch(type) {
      case "author":
        usedLength = authorLength
        break;
      case "title":
        usedLength = titleLength
        break;
    }
    return usedLength
  }

  displayTable(books) {
    let result = "";

    result += "| Pub Date     |                          Title | Authors               |\n";
    result += "|=======================================================================|\n";
    books.forEach((book) => {
      let authors = this.truncate(book.Authors, "author")
      let title = this.truncate(book.Title, "title")
      result += `\r| ${moment(book.Publication_Date, "DD/MM/YYYY").format("DD MMM YYYY ")} | ${title} | ${authors} |\n`;
    });
    return result;
  }

  truncate(myString, type) {
    let usedLength = this.pickLength(type)
    if (myString.length > usedLength) {
      var myTruncatedString = myString.substring(0,(usedLength - 4));
      myTruncatedString = myTruncatedString + " ..."
      return myTruncatedString
    } else {
      let spaces = usedLength - myString.length
      for(var i = 0; i < spaces; i++){
        myString = " " + myString
      }
      return myString
    }
  }
}

module.exports = App;

let theseBooks =
[
  {
    "Publication_Date": "29/07/1954",
    "Title": "Lord of the Rings",
    "Authors": "John Ronald Reuel Tolkien"
  },
  {
    "Publication_Date": "01/08/1996",
    "Title": "A Game of Thrones",
    "Authors": "George Raymond Martin"
  },
  {
    "Publication_Date": "21/06/2003",
    "Title": "Harry Potter and the Order of the Phoenix",
    "Authors": "Joanne Rowling"
  }
]
let app = new App();
console.log(app.displayTable(theseBooks));