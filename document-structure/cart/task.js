const product = document.querySelectorAll('.product');

product.forEach(item => {
    const productControlDec = item.querySelector('.product__quantity-control_dec');
    const productControlInc = item.querySelector('.product__quantity-control_inc');
    const productValue = item.querySelector('.product__quantity-value');
    const productAtt = item.getAttribute('data-id')
    const originalImage = item.querySelector('.product__image');

    productControlDec.addEventListener('click', function(){
        productValue.textContent = Number(productValue.textContent) <= 1 ? productValue.textContent = 1 : Number(productValue.textContent) - 1;
    })

    productControlInc.addEventListener('click', function(){
        productValue.textContent = Number(productValue.textContent) + 1;
    })

    const productAdd = item.querySelector('.product__add');

    productAdd.addEventListener('click', function(){
        const cardProducts = document.querySelector('.cart__products');
        const existProduct = cardProducts.querySelector(`.cart__product[data-id="${productAtt}"]`);

        if (existProduct) {
            const countElement = existProduct.querySelector('.cart__product-count');
            countElement.textContent = Number(countElement.textContent) + Number(productValue.textContent);
        } else {
            const cardProduct = document.createElement('div');
            const cardProductImg = originalImage.cloneNode(true);
            const cardProductCount = document.createElement('div');

            cardProduct.classList.add('cart__product');
            cardProduct.setAttribute('data-id', productAtt);
            cardProductCount.classList.add('cart__product-count');
            cardProductCount.textContent = productValue.textContent;

            cardProduct.append(cardProductImg, cardProductCount)
            cardProducts.append(cardProduct)
        }
    })

})
