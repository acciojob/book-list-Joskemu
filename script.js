//your JS code here. If required.
// Get references to the HTML elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitButton = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add event listener to the submit button
submitButton.addEventListener('click', function () {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (title && author && isbn) {
    // Create a new row with the book information
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">Clear</button></td>
    `;

    // Append the row to the book list table
    bookList.appendChild(row);

    // Add event listener to the clear button in the new row
    const deleteButton = row.querySelector('.delete');
    deleteButton.addEventListener('click', function () {
      row.remove();
    });

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
  } else {
    alert('Please fill in all fields.');
  }
});
