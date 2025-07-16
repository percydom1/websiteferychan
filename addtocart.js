const product = [
    {
        id: 0,
        image: 'pertama.jpg',
        title: 'Owl Blue Bag',
        price: 12,
    },
    {
        id: 1,
        image: 'kedua.jpg',
        title: 'Elephant Bag',
        price: 13,
    },
    {
        id: 2,
        image: 'ketiga.jpg',
        title: 'Owl White Bag',
        price: 11,
    },
    {
        id: 3,
        image: 'keempat.jpg',
        title: 'Dog Bag',
        price: 14,
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    let { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}'>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0; total=0;
    document.getElementById("cart-count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML= "$ "+0+".00";
    } 
    else {
        document.getElementById("cartitem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return `
                <div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src="${image}" alt="${title}">
                    </div>
                    <p style="font-size:12px;">${title}</p>
                    <h2 style="font-size: 15px;">$ ${price}.00</h2>
                    <i class="fa-solid fa-trash" onclick="delElement(${j++})"></i>
                </div>
            `;
        }).join('');
    }
}
