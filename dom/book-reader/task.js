const button = document.querySelectorAll('.font-size');
const book = document.querySelector('.book')

button.forEach((element) => {
    element.addEventListener('click', function(event) {
        const size = event.target.dataset.size;

        event.preventDefault();
        button.forEach((btn) => {
            btn.classList.remove('font-size_active');
        })

        element.classList.add('font-size_active')

        book.classList.remove('book_fs-big', 'book_fs-small')
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }

        // if (itemAttr === 'small') {
        //     book.classList.remove('book_fs-big');
        //     book.classList.add('book_fs-small');
        // } else if (itemAttr === 'big') {
        //     book.classList.remove('book_fs-small');
        //     book.classList.add('book_fs-big');
        // } else {
        //     book.classList.remove('book_fs-big', 'book_fs-small')
        // }
        
    })
    
})