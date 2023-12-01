const { add, displayAll, update, updateMany, remove } = require("../controller/book-controller.js");

const newBook = {
    title: "Life of she can code",
    author: "Ines IKIREZI",
    year: 2000
},

add (newBook);
displayAll();
update(1, "year", "2004");

const tobeupdate = {

    year: 2016,
    title: "Abana bato",

};

updateMany(4, tobeupdate);
remove(5)