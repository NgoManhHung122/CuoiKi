const product = [
    {
        id: 0,
        image: 'image/shoe.jpg',
        title: 'Shoe',
        price: 120,
    },
    {
        id: 1,
        image: 'image/jacket.jpg',
        title: 'Jacket',
        price: 60,
    },
    {
        id: 2,
        image: 'image/smartwatch.jpg',
        title: 'Smart Watch',
        price: 230,
    },
    {
        id: 3,
        image: 'image/dress.jpg',
        title: 'Dress',
        price: 100,
    },
    {
        id: 4,
        image: 'image/jewellery.jpg',
        title: 'Jewellery',
        price: 230,
    },
    {
        id: 5,
        image: 'image/shorts.jpg',
        title: 'Shorts',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories); //ht
