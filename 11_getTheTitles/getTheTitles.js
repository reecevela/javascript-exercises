const getTheTitles = function(books) {

  let outputArray = [];

  books.forEach(book => {
    outputArray.push(book.title);
  });

  return outputArray;

};

// Do not edit below this line
module.exports = getTheTitles;
