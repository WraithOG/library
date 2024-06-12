myLibrary = ["The Hobbit by J.R.R Tolkien, 295 pages"];



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = this.title + " by " + this.author + ", " + this.pages + " pages";
    return this.info;
}



function addBookToLibrary(){
    var closed = true;
    var newBook = document.getElementById("addBook");
    newBook.addEventListener("click", function(){
        if (closed === true){
            closed = false;
            var br = document.createElement("br");
        

            var parent = document.getElementById("book-container"); 
            var formDiv = document.createElement("div");
            formDiv.className = "form-container";
            parent.appendChild(formDiv);
            var bookForm = document.createElement("form");
            formDiv.appendChild(bookForm);

            var close = document.createElement("button");
            close.className = "btn";
            var i = document.createElement("i");
            i.className = "fa fa-close";
            close.appendChild(i);
            formDiv.appendChild(close);

            close.addEventListener("click", function (){formDiv.remove(); closed = true; return closed});


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

            var submit = document.createElement("input");
            submit.className = "submit"
            submit.id = "submit";
            submit.type = "submit";
            submit.value = "Add Book";
            bookForm.appendChild(submit);

            submit.addEventListener("click", function () {
                event.preventDefault();
                let bookTitle = document.getElementById("title").value;
                let bookAuthor = document.getElementById("author").value;
                let bookPages = document.getElementById("pages").value;
                
                this.book = Book(bookTitle, bookAuthor, bookPages);
                myLibrary.push(this.book);
                displayLibrary(myLibrary);

            });
        }
        
    });

} 



function displayLibrary(libraryArr, readStatus) {
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
