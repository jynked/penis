<template>
    <div></div>
</template>

<script>
const catalogData = [
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукты",
        starsProduct: 4,
        price: 300.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Kazan'],
        country: 'Armenia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['200', '300'],
        attributes: ['noSeed', 'spicy']
    },
    {
        image: "orange.jpg",
        name: "Dried Apricots",
        type: "Сухофрукты",
        starsProduct: 5,
        price: 450.00,
        maxItems: 150,
        sellerStars: 4,
        reviews: 23,
        article: "6215921",
        detail: "Сушеные абрикосы высшего качества",
        status: ['available'],
        deliveryCities: ['Krasnodar'],
        country: 'Armenia',
        brand: 'Rawshop',
        freeDelivery: false,
        weight: ['300', '500'],
        attributes: ['noSeed']
    },
    {
        image: "orange.jpg",
        name: "Roasted Almonds",
        type: "Орехи",
        starsProduct: 5,
        price: 890.00,
        maxItems: 100,
        sellerStars: 5,
        reviews: 42,
        article: "6215922",
        detail: "Жареный миндаль с солью",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Kazan', 'Krasnodar'],
        country: 'Kazakhstan',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['200', '400'],
        attributes: ['fried', 'spicy']
    },
    {
        image: "orange.jpg",
        name: "Green Tea",
        type: "Кофе и чай",
        starsProduct: 4,
        price: 250.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 15,
        article: "6215923",
        detail: "Зеленый чай высшего сорта",
        status: ['available'],
        deliveryCities: ['Voronezh'],
        country: 'Kazakhstan',
        brand: 'Martstore',
        freeDelivery: false,
        weight: ['200'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Exotic Mango",
        type: "Экзотика",
        starsProduct: 5,
        price: 780.00,
        maxItems: 50,
        sellerStars: 5,
        reviews: 28,
        article: "6215924",
        detail: "Спелое манго премиум качества",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Krasnodar'],
        country: 'Armenia',
        brand: 'XBekery',
        freeDelivery: true,
        weight: ['400', '500'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Salted Cashews",
        type: "Орехи",
        starsProduct: 4,
        price: 1200.00,
        maxItems: 80,
        sellerStars: 4,
        reviews: 19,
        article: "6215925",
        detail: "Кешью солёные",
        status: ['available'],
        deliveryCities: ['Kazan'],
        country: 'Kazakhstan',
        brand: 'Martstore',
        freeDelivery: false,
        weight: ['200', '300', '500'],
        attributes: ['fried', 'spicy']
    },
    {
        image: "orange.jpg",
        name: "Fresh Tomatoes",
        type: "Овощи",
        starsProduct: 5,
        price: 320.00,
        maxItems: 200,
        sellerStars: 5,
        reviews: 31,
        article: "6215926",
        detail: "Свежие томаты",
        status: ['available'],
        deliveryCities: ['Voronezh', 'Krasnodar'],
        country: 'Russia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['500', '600'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Black Tea",
        type: "Кофе и чай",
        starsProduct: 4,
        price: 280.00,
        maxItems: 150,
        sellerStars: 4,
        reviews: 12,
        article: "6215927",
        detail: "Чёрный чай высшего сорта",
        status: ['outOfStock'],
        deliveryCities: ['Kazan'],
        country: 'Kazakhstan',
        brand: 'Rawshop',
        freeDelivery: false,
        weight: ['200'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Mixed Dried Fruits",
        type: "Сухофрукты",
        starsProduct: 5,
        price: 550.00,
        maxItems: 100,
        sellerStars: 5,
        reviews: 25,
        article: "6215928",
        detail: "Ассорти сухофруктов",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Krasnodar', 'Kazan'],
        country: 'Armenia',
        brand: 'XBekery',
        freeDelivery: true,
        weight: ['300', '400'],
        attributes: ['noSeed']
    },
    {
        image: "orange.jpg",
        name: "Premium Coffee Beans",
        type: "Кофе и чай",
        starsProduct: 5,
        price: 890.00,
        maxItems: 100,
        sellerStars: 5,
        reviews: 45,
        article: "6215929",
        detail: "Премиальные кофейные зерна",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Kazan', 'Krasnodar'],
        country: 'Armenia',
        brand: 'Rawshop',
        freeDelivery: true,
        weight: ['200', '500'],
        attributes: ['fried']
    },
    {
        image: "orange.jpg",
        name: "Organic Pistachios",
        type: "Орехи",
        starsProduct: 4,
        price: 1500.00,
        maxItems: 50,
        sellerStars: 4,
        reviews: 33,
        article: "6215930",
        detail: "Органические фисташки",
        status: ['available'],
        deliveryCities: ['Krasnodar'],
        country: 'Kazakhstan',
        brand: 'XBekery',
        freeDelivery: false,
        weight: ['300', '400'],
        attributes: ['fried', 'spicy']
    },
    {
        image: "orange.jpg",
        name: "Organic Dates",
        type: "Сухофрукты",
        starsProduct: 5,
        price: 420.00,
        maxItems: 120,
        sellerStars: 5,
        reviews: 38,
        article: "6215931",
        detail: "Органические финик",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Kazan'],
        country: 'Armenia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['200', '400'],
        attributes: ['noSeed']
    },
    {
        image: "orange.jpg",
        name: "Fresh Cucumbers",
        type: "Овощи",
        starsProduct: 4,
        price: 180.00,
        maxItems: 250,
        sellerStars: 4,
        reviews: 22,
        article: "6215932",
        detail: "Свежие огурцы",
        status: ['available'],
        deliveryCities: ['Krasnodar', 'Kazan'],
        country: 'Russia',
        brand: 'Martstore',
        freeDelivery: false,
        weight: ['500', '600'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Spiced Almonds",
        type: "Орехи",
        starsProduct: 5,
        price: 950.00,
        maxItems: 80,
        sellerStars: 5,
        reviews: 29,
        article: "6215933",
        detail: "Миндаль со специями",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh'],
        country: 'Kazakhstan',
        brand: 'XBekery',
        freeDelivery: true,
        weight: ['200', '300'],
        attributes: ['fried', 'spicy']
    },
    {
        image: "orange.jpg",
        name: "Herbal Tea Mix",
        type: "Кофе и чай",
        starsProduct: 5,
        price: 340.00,
        maxItems: 150,
        sellerStars: 4,
        reviews: 27,
        article: "6215934",
        detail: "Травяной чайный сбор",
        status: ['available'],
        deliveryCities: ['Voronezh', 'Kazan'],
        country: 'Russia',
        brand: 'Martstore',
        freeDelivery: true,
        weight: ['200', '300'],
        attributes: ['spicy']
    },
    {
        image: "orange.jpg",
        name: "Fresh Strawberries",
        type: "Ягоды",
        starsProduct: 5,
        price: 420.00,
        maxItems: 100,
        sellerStars: 5,
        reviews: 34,
        article: "6215935",
        detail: "Свежая клубника",
        status: ['available', 'onSale'],
        deliveryCities: ['Krasnodar'],
        country: 'Russia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['300', '500'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Fresh Raspberries",
        type: "Ягоды",
        starsProduct: 5,
        price: 650.00,
        maxItems: 80,
        sellerStars: 5,
        reviews: 41,
        article: "6215936",
        detail: "Свежая малина",
        status: ['available'],
        deliveryCities: ['Voronezh', 'Kazan'],
        country: 'Russia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['200', '300'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Dried Figs",
        type: "Сухофрукты",
        starsProduct: 4,
        price: 480.00,
        maxItems: 150,
        sellerStars: 4,
        reviews: 19,
        article: "6215937",
        detail: "Сушеный инжир",
        status: ['available', 'onSale'],
        deliveryCities: ['Krasnodar', 'Kazan'],
        country: 'Armenia',
        brand: 'XBekery',
        freeDelivery: false,
        weight: ['300', '400', '500'],
        attributes: ['noSeed']
    },
    {
        image: "orange.jpg",
        name: "Premium Walnuts",
        type: "Орехи",
        starsProduct: 5,
        price: 850.00,
        maxItems: 120,
        sellerStars: 5,
        reviews: 31,
        article: "6215938",
        detail: "Отборные грецкие орехи",
        status: ['available', 'onSale'],
        deliveryCities: ['Voronezh', 'Krasnodar'],
        country: 'Armenia',
        brand: 'Gainzo',
        freeDelivery: true,
        weight: ['200', '400', '500'],
        attributes: ['fried']
    },
    {
        image: "orange.jpg",
        name: "Fresh Bell Peppers",
        type: "Овощи",
        starsProduct: 4,
        price: 280.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 25,
        article: "6215939",
        detail: "Свежий болгарский перец",
        status: ['available'],
        deliveryCities: ['Kazan', 'Krasnodar'],
        country: 'Russia',
        brand: 'Martstore',
        freeDelivery: false,
        weight: ['500', '600'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Fresh Carrots",
        type: "Овощи",
        starsProduct: 4,
        price: 160.00,
        maxItems: 300,
        sellerStars: 4,
        reviews: 28,
        article: "6215940",
        detail: "Свежая морковь",
        status: ['available'],
        deliveryCities: ['Voronezh', 'Kazan'],
        country: 'Russia',
        brand: 'Gainzo',
        freeDelivery: false,
        weight: ['500', '600'],
        attributes: []
    },
    {
        image: "orange.jpg",
        name: "Organic Honey",
        type: "Сладости",
        starsProduct: 5,
        price: 890.00,
        maxItems: 50,
        sellerStars: 5,
        reviews: 45,
        article: "6215941",
        detail: "Органический мед",
        status: ['available', 'onSale'],
        deliveryCities: ['Krasnodar'],
        country: 'Armenia',
        brand: 'XBekery',
        freeDelivery: true,
        weight: ['200', '300', '500'],
        attributes: []
    }
].map((product, index) => ({
    ...product,
    id: index + 1
}));

export default {
    name: 'ProductInfo',
    data() {
        return {
            catalog: catalogData
        };
    },
    methods: {
        getCatalog() {
            return this.catalog;
        }
    }
}

export { catalogData };
</script>