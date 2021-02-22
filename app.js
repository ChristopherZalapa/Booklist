// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
// Be Responisble for prototype methods add book delete book Errors
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create tr Element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);

    console.log(row);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const   title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Add Book To List
    ui.addBookToList(book);


    e.preventDefault();
})