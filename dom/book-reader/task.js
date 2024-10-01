const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book')

fontSize.forEach((element) => {
    element.addEventListener('click', function(event) {
        const itemAttr = element.getAttribute('data-size')

        event.preventDefault();
        fontSize.forEach((fontSize) => {
            fontSize.classList.remove('font-size_active');
        })

        element.classList.add('font-size_active')

        if (itemAttr === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (itemAttr === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-big', 'book_fs-small')
        }
        
    })
    
})