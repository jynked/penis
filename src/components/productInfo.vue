<template>
    <div></div>
</template>

<script>
const catalogData = [
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 4,
        price: 3.00,
        maxItems: 300,
        sellerStars: 5,
        reviews: 17,
        article: "6215920-1-2",
        detail: "Описание продукта 1"
    },
    {
        image: "orange.jpg",
        name: "Fresh Oranges",
        type: "Фрукт",
        starsProduct: 5,
        price: 5.00,
        maxItems: 200,
        sellerStars: 4,
        reviews: 10,
        article: "6215920",
        detail: "Описание продукта 2"
    },
    // ... остальные элементы каталога ...
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
    // Добавляем метод для получения каталога
    methods: {
        getCatalog() {
            return this.catalog;
        }
    }
}

// Экспортируем каталог отдельно для использования в других компонентах
export { catalogData };
</script>