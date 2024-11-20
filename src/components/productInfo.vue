<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            catalog: [
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
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
                    article: "6215920-6",
                    detail: "Описание продукта 2"
                },
            ].map((product, index) => ({
                ...product,
                id: index + 1
            })),
        };
    },
    computed: {
        getProducts() {
            return this.products;
        }
    }
}
</script>