const product = document.querySelectorAll('.product');

product.forEach(item => {
    const productControlDec = item.querySelector('.product__quantity-control_dec');
    const productControlInc = item.querySelector('.product__quantity-control_inc');
    const productValue = item.querySelector('.product__quantity-value');
    const productAtt = item.getAttribute('data-id')
    

    productControlDec.addEventListener('click', function(){
        productValue.textContent = Number(productValue.textContent) <= 1 ? 1 : Number(productValue.textContent) - 1;
    })

    productControlInc.addEventListener('click', function(){
        productValue.textContent = Number(productValue.textContent) + 1;
    })

    const productAdd = item.querySelector('.product__add');

    productAdd.addEventListener('click', function(){
        const originalImage = item.querySelector('img').getAttribute('src');
        const cardProducts = document.querySelector('.cart__products');
        const existProduct = cardProducts.querySelector(`.cart__product[data-id="${productAtt}"]`);

        if (existProduct) {
            const countElement = existProduct.querySelector('.cart__product-count');
            countElement.textContent = Number(countElement.textContent) + Number(productValue.textContent);
        } else {
            cardProducts.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id="${productAtt}">
                    <img class="cart__product-image" src="${originalImage}" />
                    <div class="cart__product-count">${productValue.textContent}</div>
                </div>
                `)
        }
    })

})
