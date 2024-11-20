<template>
    <footer>
        <div class="footer-info">
            <div class="component">
                <p class="heading">О нас</p>
                <a href="#">О компании</a>
                <a href="#">Вакансии</a>
            </div>
            <div class="component">
                <p class="heading">Партнёрам</p>
                <a href="/log">Войти в личный кабинет</a>
                <a href="/log">Стать партнёром</a>
            </div>
            <div class="component">
                <p class="heading">Покупателям</p>
                <router-link :to="{ name: 'faq', query: { section: 'howOrder' }}">Как сделать заказ?</router-link>
                <router-link :to="{ name: 'faq', query: { section: 'howPay' }}">Как оплатить?</router-link>
                <router-link :to="{ name: 'faq', query: { section: 'howDeliver' }}">Доставка</router-link>
                <router-link :to="{ name: 'faq', query: { section: 'howReturnItem' }}">Возврат</router-link>
                <router-link :to="{ name: 'faq', query: { section: 'whereConsultation' }}">Вопрос-ответ</router-link>
            </div>
            <div class="component">
                <a href="#">Соглашение о конфиденциальности</a>
                <a href="#">Пользовательское соглашение</a>
                <a href="#">Правила рекомендательных технологий</a>
                <div class="cards">
                    <img src="../assets/img/cards.png" alt="">
                </div>
                <div class="media">
                    <a href="https://www.facebook.com/harvunity">
                        <img src="../assets/img/facebookFooter.jpg" alt="">
                    </a>
                    <a href="https://www.instagram.com/harvunity">
                        <img src="../assets/img/instFooter.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <p>2024 © HarvUnity. Все права защищены</p>
    </footer>
</template>