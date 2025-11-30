document.addEventListener('DOMContentLoaded', function () {

    const list = document.querySelector('#movie-list ul');
    const addForm = document.getElementById('add-movie');

    //delete drama
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });


    //add movie

    addForm.addEventListener('submit', function (e) {
        e.preventDefault();



        //cfreating elements
        const value = addForm.querySelector('input[type=text]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'Delete';

        //adding classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to dom
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // clear input
        addForm.querySelector('input[type=text]').value = "";
    });
})