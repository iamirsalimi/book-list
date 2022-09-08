// add books to list
const ul = document.querySelector('ul');
const link = document.querySelector('.button');
const inputText = document.querySelector('.add-books input');
const spanDelete = `<span class="delete">delete</span>`;


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
    console.log(books);
    for(let i=0;i<books.length;i++){
        if(books[i]===book){
            books.splice(i,1);
        }
    }
    console.log(books);
    if(books.length ===0){
        localStorage.clear();
    } else {
        localStorage.setItem('books',books);
    }
}