let history = document.getElementById('history');
history.style.display = 'none';
let prices = document.getElementById('prices');
let totalPrice = document.getElementById('totalPrice');
let yourTotal = document.getElementById('yourTotal');
let goku = document.getElementById('goku');
goku.style.display = 'none';
prices.style.display = 'none';
let vegeta = document.getElementById('vegeta');
vegeta.style.display = 'none';
let fifty = document.getElementById('fifty');
fifty.style.display = 'none';
let morty = document.getElementById('kendrick');
kendrick.style.display = 'none';
let name = document.getElementById('name');
let code = document.getElementById('code');
let discountParagraph = document.getElementById('discountCode')
let discountButton = document.getElementById('discountButton')
let portofol = document.getElementById('portofoli');
let img1 = document.getElementById('imazhi1');
img1.style.display = 'none';
let img2 = document.getElementById('imazhi2');
img2.style.display = 'none';
let img3 = document.getElementById('imazhi3');
img3.style.display = 'none';
let img4 = document.getElementById('imazhi4');
img4.style.display = 'none';
let img5 = document.getElementById('imazhi5');
img5.style.display = 'none';
let img6 = document.getElementById('imazhi6');
img6.style.display = 'none';

let clients = [
    {
        fullName: 'Donaldo Duro',
        theDiscountCode: '12345678'
    },
    {
        fullName: 'Duro Donaldo',
        theDiscountCode: '87654321'
    }
]

let showHistory = () => {
    if (history.style.display === 'none') {
        history.style.display = 'block'
    } else {
        history.style.display = 'none';
    }
}

let createWebsite = () => {
    if (prices.style.display === "none") {
        prices.style.display = "block"
    }
    else {
        prices.style.display = "none";
    }
}

let addPrice = () => {
    yourTotal.innerHTML = 'Your total price in dollars is:'
    let value = Number(document.getElementById('totalPrice').innerHTML);

    totalPrice.innerHTML = 150 + value;
}


let addPrice2 = () => {
    yourTotal.innerHTML = 'Your total price in dollars is:'
    let value = Number(document.getElementById('totalPrice').innerHTML);
    totalPrice.innerHTML = 200 + value;
}

let addPrice3 = () => {
    yourTotal.innerHTML = 'Your total price in dollars is:'
    let value = Number(document.getElementById('totalPrice').innerHTML);
    totalPrice.innerHTML = 250 + value;
}

let addPrice4 = () => {
    yourTotal.innerHTML = 'Your total price in dollars is:'
    let value = Number(document.getElementById('totalPrice').innerHTML);
    totalPrice.innerHTML = 300 + value;
}

let removePrice = () => {
    for (let i = 0; i < clients.length; i++) {
        if (name.value === clients[i].fullName && code.value === clients[i].theDiscountCode) {
            yourTotal.innerHTML = 'Your total price in dollars is:'
            let value = Number(document.getElementById('totalPrice').innerHTML);
            discountParagraph.innerHTML = 'You just saved $150'
            discountButton.disabled = true;
            totalPrice.innerHTML = value - 150;
            break;

        } else if (!name.value || !code.value) {
            discountParagraph.innerHTML = 'Please enter a discount name and code.'
        } else {
            discountParagraph.innerHTML = 'Your discount code or name is not valid.'
        }

    }

}

let gokuInfo = () => {
    if (goku.style.display === "none") {
        goku.style.display = "block"
    }
    else {
        goku.style.display = "none";
    }
}

let vegetaInfo = () => {
    if (vegeta.style.display === "none") {
        vegeta.style.display = "block"
    }
    else {
        vegeta.style.display = "none";
    }
}

let fiftyInfo = () => {
    if (fifty.style.display === "none") {
        fifty.style.display = "block"
    }
    else {
        fifty.style.display = "none";
    }
}

let kendrickInfo = () => {
    if (kendrick.style.display === "none") {
        kendrick.style.display = "block"
    }
    else {
        kendrick.style.display = "none";
    }
}

let zmadho1 = () => {
    portofol.style.display = 'none';
    img1.style.display = 'block';
}
let zvogelo1 = () => {
    img1.style.display = 'none';
    portofol.style.display = 'block';
}
let zmadho2 = () => {
    portofol.style.display = 'none';
    img2.style.display = 'block';
}
let zvogelo2 = () => {
    img2.style.display = 'none';
    portofol.style.display = 'block';
}
let zmadho3 = () => {
    portofol.style.display = 'none';
    img3.style.display = 'block';
}
let zvogelo3 = () => {
    img3.style.display = 'none';
    portofol.style.display = 'block';
}
let zmadho4 = () => {
    portofol.style.display = 'none';
    img4.style.display = 'block';
}
let zvogelo4 = () => {
    img4.style.display = 'none';
    portofol.style.display = 'block';
}
let zmadho5 = () => {
    portofol.style.display = 'none';
    img5.style.display = 'block';
}
let zvogelo5 = () => {
    img5.style.display = 'none';
    portofol.style.display = 'block';
}
let zmadho6 = () => {
    portofol.style.display = 'none';
    img6.style.display = 'block';
}
let zvogelo6 = () => {
    img6.style.display = 'none';
    portofol.style.display = 'block';
}