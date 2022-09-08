let inputText = document.querySelector('.add-book input');
let button = document.querySelectorAll('.button')[1];
let ul =document.querySelector('ul');
button.addEventListener('click',function(e){
    let li = document.createElement('li');
    let spanName = document.createElement('span');
    let spanDelete =document.createElement('span');
    spanName.className = 'name';
    spanDelete.className = 'delete';
    spanDelete.innerHTML = 'delete';
    li.appendChild(spanName);
    li.appendChild(spanDelete);
    spanName.innerHTML = inputText.value;
    inputText.value = '';
    ul.appendChild(li);
    e.preventDefault();
});
ul.addEventListener('click',function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();     
    }
    e.preventDefault();
});