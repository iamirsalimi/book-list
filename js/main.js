// select HTML elements
const checkBox = document.querySelector('#hiding');
const ul = document.querySelector('ul');
const link = document.querySelector('.button');
const inputText = document.querySelector('.add-books input');
const spanDelete = `<span class="delete">delete</span>`;
const title = document.querySelectorAll('.title')[1];
const inputSearch = document.querySelector('.search-book input');

// add books to list
link.addEventListener('click',(e)=>{
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);
    storeTOlocalStorage(inputText.value);
    inputText.value = '';
    e.preventDefault();
});
// get books from local storage
document.addEventListener('DOMContentLoaded' ,(e)=>{
    let books;
    if(localStorage.getItem('books') === null){
        books =[];
    } else {
        books =localStorage.getItem('books').split(',');
    }
    for(let book of books){
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.className = 'name';
        spanName.textContent = book;
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
    }
    inputText.value = '';
    inputSearch.value = '';
    e.preventDefault();
});
// remove books with delete button
ul.addEventListener('click',(e)=>{
    if(e.target.className ==='delete'){
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.firstElementChild.textContent);
    }
    e.preventDefault();
});
// hide books checkbox
checkBox.addEventListener('change',(e)=>{
    if(checkBox.checked){
        ul.style.display='none';
        title.style.display='none';
    } else{
        ul.style.display='block';
        title.style.display='initial';
    }
    e.preventDefault();
});
// search between books
inputSearch.addEventListener('keyup',(e)=>{
    for(let book of ul.children){
        console.log(book.firstElementChild.textContent);
        if(book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1){
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    }

    e.preventDefault();
});
// functions
function storeTOlocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null){
        books =[];
    } else {
        books =localStorage.getItem('books').split(',');
    }
    books.push(book);
    localStorage.setItem("books",books);
}
function removeFromLocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null){
        books =[];
    } else {
        books =localStorage.getItem('books').split(',');
    }
    for(let i=0;i<books.length;i++){
        if(books[i]===book){
            books.splice(i,1);
        }
    }
    if(books.length ===0){
        localStorage.clear();
    } else {
        localStorage.setItem('books',books);
    }
}