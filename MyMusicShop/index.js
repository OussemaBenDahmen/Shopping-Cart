/*******************************************/
let modal2 = document.getElementById("myForm");
let btn2 = document.getElementsByClassName('sign1');
let span2 = document.getElementsByClassName("close2")[0];
let cancel1 = document.getElementsByClassName('cancelbtn');

for (let i = 0; i < btn2.length; i++) {

    btn2[i].onclick = function() {
        modal2.style.display = "block";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
}

for (let j = 0; j < cancel1.length; j++) {
    cancel1[j].onclick = function() {
        modal2.style.display = "none";
    }
}




/****************Form modal*****************/
let modal3 = document.getElementById("myForm2");
let btn3 = document.getElementsByClassName('sign2')[0];
let span3 = document.getElementsByClassName("close3")[0];
let cancel2 = document.getElementById('cancelbtn2');
btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

cancel2.onclick = function() {
    modal3.style.display = "none";
}

/******************Addin an element to the cart********************/
let span4 = document.getElementsByClassName("close")[0].cloneNode(true);
let addbtns = document.getElementsByClassName('addbtn')
let product = document.getElementsByClassName('product-card')
let cart = document.getElementById('cart-modal')
let price = 0;
let x = 0;
for (let j = 0; j < addbtns.length; j++) {
    addbtns[j].addEventListener('click', () => {
        let clone = product[j].cloneNode(true)
        clone.className += " cartitem";
        cart.appendChild(clone)
        price += Number(addbtns[j].dataset.price);
        document.getElementById('total').innerHTML = `$${price}`;
        document.getElementById('quantity').innerHTML = ++x;
        document.getElementById('quantity2').innerHTML = `Quantity: ${document.getElementById('quantity').innerHTML}`;
        document.getElementById('total2').innerHTML = `Total price: ${document.getElementById('total').innerHTML}`;
        document.getElementsByClassName('cart-text')[0].style.display = 'none';
    })

}

/*****************Cart modal*******************/
let modal = document.getElementById("myCart");
let btn = document.getElementsByClassName('cart')[0];
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    let clonelist = document.getElementsByClassName('cartitem');

    /*******************Removing elements********************/
    for (let i = 0; i < clonelist.length; i++) {
        let btns = document.querySelectorAll('.cartitem .addbtn')
        clonelist[i].addEventListener('click', () => {
            clonelist[i].style.display = 'none';
            price -= Number(btns[i].dataset.price);
            document.getElementById('total').innerHTML = `$${price}`;
            document.getElementById('quantity').innerHTML = --x;
            document.getElementById('quantity2').innerHTML = `Quantity: ${document.getElementById('quantity').innerHTML}`
            document.getElementById('total2').innerHTML = `Total price: ${document.getElementById('total').innerHTML}`

        })

    }
}
span.onclick = function() {
    modal.style.display = 'none';
}
document.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";

    }
})
let modchange = document.getElementById('modal-change');
modchange.onclick = function() {
    modal2.style.display = 'none';
    modal3.style.display = 'block'
}