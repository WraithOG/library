myLibrary = ["The Hobbit by J.R.R Tolkien, 295 pages, read"];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    return this.info;
}


function addBookToLibrary(){

    var newBook = document.getElementById("addBook");
    newBook.addEventListener("click", function(){
        var br = document.createElement("br");

        var parent = document.getElementById("book-container"); 
        var formDiv = document.createElement("div");
        formDiv.className = "form-container";
        parent.appendChild(formDiv);
        var bookForm = document.createElement("form");
        formDiv.appendChild(bookForm);

        var title = document.createElement("input");
        var titleLabel = document.createElement("label");
        linebreak = document.createElement("br");
        title.className = "input";
        title.id = "title";
        title.placeholder = "Title";
        title.type = "text";
        titleLabel.htmlFor = "title";
        titleLabel.innerHTML = "Title: ";
        bookForm.appendChild(titleLabel);
        bookForm.appendChild(title);
        bookForm.append(linebreak);

        var author = document.createElement("input");
        var authorLabel = document.createElement("label");
        author.className = "input"
        author.id = "author";
        author.placeholder = "Author"
        author.type = "text";
        authorLabel.htmlFor = "author";
        authorLabel.innerHTML = "Author: ";
        bookForm.appendChild(authorLabel);
        bookForm.appendChild(author);
        bookForm.append(br);

        var pages = document.createElement("input");
        var pagesLabel = document.createElement("label");
        var br2 = document.createElement("br");
        pages.className = "input num"
        pages.id = "pages";
        pages.type = "number";
        pagesLabel.htmlFor = "pages";
        pagesLabel.innerHTML = "Number of Pages: ";
        bookForm.appendChild(pagesLabel);
        bookForm.appendChild(pages);
        bookForm.append(br2);

        var read = document.createElement("input");
        var readLabel = document.createElement("label");
        var br3 = document.createElement("br");
        read.className = "input"
        read.id = "read";
        read.type = "checkbox";
        readLabel.htmlFor = "read";
        readLabel.innerHTML = "Have you read this book?";
        bookForm.appendChild(readLabel);
        bookForm.appendChild(read);
        bookForm.append(br3);

        
    });
    /*let bookTitle = prompt("Please enter the title: ");
    let bookAuthor = prompt("Author :");
    let bookPages = prompt("Number of Pages :");
    let bookRead = prompt("Did you read this book? ");*/
    this.book = Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(this.book);
    displayLibrary(myLibrary);
}



function displayLibrary(libraryArr) {
    for (let i = (libraryArr.length - 1); i < libraryArr.length; i++) {
        //Creates container div with an id of the book index for the delete function
        var div = document.createElement("div");
        div.className = "book-data";
        div.id = i;
        //adding the book info
        var text = document.createElement("div");
        text.innerHTML = libraryArr[i];
        text.className = "book-text";
        div.appendChild(text);
        //delete button
        var delete_button = document.createElement("button");
        delete_button.className = "delete";
        delete_button.innerHTML = "Delete";
        //searches for a div with the id of the button, deletes the div and removes from array
        delete_button.addEventListener("click", function () {var selectedBook = document.getElementById(i); selectedBook.remove(); delete myLibrary[i];})
        div.appendChild(delete_button);

        var read_button = document.createElement("button");
        read_button.className = "read";
        read_button.innerHTML = "Read";
        read_button.style.backgroundColor = "#00c893";
        read_button.addEventListener("click", function () {if (read_button.innerHTML === "Read"){
            read_button.style.backgroundColor = "#c80036"; read_button.innerHTML = "Not Read";
        }else {
            read_button.style.backgroundColor = "#00c893"; read_button.innerHTML = "Read";
        }})
        div.appendChild(read_button);

        //adds the div to the container in html
        var parent = document.getElementById("books");
        parent.appendChild(div);
    }
    
}
addBookToLibrary();
displayLibrary(myLibrary);
