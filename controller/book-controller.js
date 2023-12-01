const {booksDatabase}=require("../db/book-registration.js");



//Function which adds a new Book

const add=(newBook)=>{
    newBook.id=booksDatabase.length+1;
    booksDatabase.push(newBook);

    console.log("\nNew book added\n");
    
    console.log(booksDatabase);

}
//function to display all books

const displayAll=()=>{
  console.log("\n All books \n");
  console.log(booksDatabase);
 
};

// Updating an element

const update=(id,key,value)=>{
    var exists=booksDatabase.find(ele=>ele.id===id);
    if (!exists) {
        console.log("book not found\n");
    }
    else{
       
        exists[key]=value;
        
        console.log("book info updated\n");
        console.log(exists);

    }
}

//updating many elements
const updateMany=(id,obj)=>{
     var exists=booksDatabase.find(ele=>ele.id===id);
     if (!exists) {
        console.log("book not found\n");
        
     } else {
        for(key in obj){
            exists[key]=obj[key];  
        }
        console.log("book info updated\n");
        console.log(exists);
        
     }


};
const remove=(id)=>{
  var exists=booksDatabase.find(ele=>ele.id===id);
  if (!exists) {
    console.log("book not found\n");

    
  } else {
    var remaining=[];
    remaining=booksDatabase.filter(ele=>ele.id!==id);
    console.log(remaining);
    
  }  
}


module.exports={
   add,
   displayAll,
   update,
   updateMany,
   remove
}

