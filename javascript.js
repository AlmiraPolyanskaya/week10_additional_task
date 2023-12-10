function calculateTotalPrice(quantity = 2, price = 15000000) {
    let result = quantity * price;
    let totalPrice = result.toLocaleString('ru-RU');
    alert(`Стоимость покупки: ${totalPrice} рублей`);
}

function messageCost(quantity = 2, price = 15000000) {
    let result = quantity * price;
    let totalPrice = result.toLocaleString('ru-RU');
    window["total-price_text"].innerHTML = (`Стоимость покупки: ${totalPrice} рублей`);
};
