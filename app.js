// handle mobile 
document.getElementById('plus-button-mobile').addEventListener('click', function () {
    document.getElementById('control-mobile').value = parseInt(document.getElementById('control-mobile').value) + 1;
    document.getElementById('price-mobile').innerText = parseInt(document.getElementById('control-mobile').value) * 1219;
    subTotal();
    taxCount();
    totalPrice();
});

document.getElementById('minus-button-mobile').addEventListener('click', function () {
    if (document.getElementById('control-mobile').value > 1) {
        document.getElementById('control-mobile').value = parseInt(document.getElementById('control-mobile').value) - 1;
        document.getElementById('price-mobile').innerText = parseInt(document.getElementById('control-mobile').value) * 1219;
        subTotal();
        taxCount();
        totalPrice();
    }
});

// handle case 

document.getElementById('plus-button-case').addEventListener('click', function () {
    document.getElementById('control-case').value = parseInt(document.getElementById('control-case').value) + 1;
    document.getElementById('price-case').innerText = parseInt(document.getElementById('control-case').value) * 59;
    subTotal();
    taxCount();
    totalPrice();
});

document.getElementById('minus-button-case').addEventListener('click', function () {
    if (document.getElementById('control-case').value > 1) {
        document.getElementById('control-case').value = parseInt(document.getElementById('control-case').value) - 1;
        document.getElementById('price-case').innerText = parseInt(document.getElementById('control-case').value) * 59;
        subTotal();
        taxCount();
        totalPrice();
    }
});

function taxCount() {
    document.getElementById('tax').innerText = parseFloat(document.getElementById('sub-total').innerText) / 10;
};

function subTotal() {
    document.getElementById('sub-total').innerText = parseInt(document.getElementById('price-mobile').innerText) + parseInt(document.getElementById('price-case').innerText);
};

function totalPrice() {
    document.getElementById('total').innerText = parseFloat(document.getElementById('sub-total').innerText) + parseFloat(document.getElementById('tax').innerText)
};