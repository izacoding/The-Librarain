

var library = [];
var checkBooks = [];
// declare an array for the books that are checked out

function Book(t, a, p ,y){
	return{
		Title: t,
		Author: a,
		Pages: p,
		Published:y,
	}
};

function storeBook(){
	var Title = document.getElementById("Title").value;
	var Author = document.getElementById("Author").value;
	var Pages = document.getElementById("Pages").value;
	var Published = document.getElementById("Year").value;

	let entry = new Book(Title, Author, Pages ,Published);
	library.push(entry);
	displayBooks();
}

function displayBooks(){
	document.getElementById("libraryBooks").innerHTML = 'There are ' + library.length + ' books in the library';
	for(i = 0; i < library.length; i++){
		// create unordered list
		var ul = document.createElement("ul");
		// create list items
		var li1 = document.createElement("li");
		var li2 = document.createElement("li");
		var li3 = document.createElement("li");
		var li4 = document.createElement("li");
		// turns object attributes into text
		var bTitle = document.createTextNode(library[i].Title);
		var bAuthor = document.createTextNode(library[i].Author);
		var bPages = document.createTextNode(library[i].Pages);
		var bPublished = document.createTextNode(library[i].Published);
		// attach each attribute's text into an li
		li1.appendChild(bTitle);
		li2.appendChild(bAuthor);
		li3.appendChild(bPages);
		li4.appendChild(bPublished);
		// attach each li to the ul
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		ul.appendChild(li4);
		// attach the big ul to the library
		document.getElementById("libraryBooks").append(ul);
	} 
	
}

// make another sections for checked out books
// make a button to check out a book, it should open up a prompt or modal that asks only for the title
// go back to brian for the rest of the javascript

function sea(){
	var searchBook = prompt("Enter the title of the book you want to check out");
	var book;
	for(var x = 0; x < library.length; x++){
		if(library[x].Title == searchBook){
			book = library[x];
			checkBooks.push(book);
			library.splice(x, 1);
		}
	}
	checkout();
}

function checkout(){
	document.getElementById("checkout").innerHTML = "There are " + checkBooks.length + " books in your checkout cart";
	for(i = 0; i < checkBooks.length; i++){
		// We are creating a element that prompts in the html below
		var checkout = document.createElement("ul");
        // Create a list item that shows in html
        var li1 = document.createElement("li");
		var li2 = document.createElement("li");
		var li3 = document.createElement("li");
		var li4 = document.createElement("li");
// create a object that represent the books that are being checked out 
        var cTitle = document.createTextNode(checkBooks[i].Title);
		var cAuthor = document.createTextNode(checkBooks[i].Author);
		var cPages = document.createTextNode(checkBooks[i].Pages);
		var cPublished = document.createTextNode(checkBooks[i].Published);
		// attach each attribute's text into an li
        li1.appendChild(cTitle);
		li2.appendChild(cAuthor);
		li3.appendChild(cPages);
		li4.appendChild(cPublished);
		// attach the li to the ul
		checkout.appendChild(li1);
		checkout.appendChild(li2);
		checkout.appendChild(li3);
		checkout.appendChild(li4);
        // attach the big ul to the libary
        document.getElementById("checkout").append(checkout);
	    displayBooks();
	}

 }


  