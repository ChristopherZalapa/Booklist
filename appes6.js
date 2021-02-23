class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        // Create List
        const list = document.getElementById('book-list');
        // Create TR Element
        const row = document.createElement('tr');
        // Insert Cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.title}</td>
        <td>${book.title}</td>
        <td><a href="#" class="delete">X<a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create Div
        const div = document.createElement('div');
        // Add Classes
        div.className = `alert ${className}`;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        // Get Form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);
        // Timeout After 3 Seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listener To Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
    
    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author ==='' || isbn === '') {
        // Error Alert
        ui.showAlert('Please Fill In All Fields', 'error')
    } else {
        // Add Book To List
        ui.addBookToList(book);
        // Show Success
        ui.showAlert('Book Added!', 'success');
        // Clear Fields
        ui.clearFields();

        e.preventDefault();
    }
})

