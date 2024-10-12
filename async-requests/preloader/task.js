const xhr = new XMLHttpRequest();
const loader = document.querySelector('img');
const itemList = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const data = JSON.parse(xhr.responseText)

        console.log(data)
        
        for (var key in data.response.Valute) {
            itemList.insertAdjacentHTML('afterbegin', `
                <div class="item">
                    <div class="item__code">
                        ${key}
                    </div>
                    <div class="item__value">
                        ${data.response.Valute[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
                
                `)
        }
        
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send()