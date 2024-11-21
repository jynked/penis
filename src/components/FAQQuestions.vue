<template>
    <div class="faq-questions">
        <div v-for="section in sections" :key="section.id">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + section.id"
                aria-expanded="false" :class="{ 'active': activeButtons[section.id] }"
                @click="toggleActive(section.id)">
                {{ section.title }}
            </button>
            <div class="collapse" :id="section.id">
                <div class="card card-body">
                    <button v-for="question in section.questions" :key="question.id" class="point"
                        @click="setActiveAnswer(question.id), toggleActive(section.id)" data-bs-toggle="collapse"
                        :data-bs-target="'#' + section.id">
                        <img src="../assets/img/question.png" alt="">
                        <p>{{ question.text }}</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        setActiveAnswer: {
            type: Function,
            required: true
        },
        activeButtons: {
            type: Object,
            required: true
        },
        toggleActive: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            sections: [
                {
                    id: 'forSuppliers',
                    title: 'Поставщикам',
                    questions: [
                        { id: 'currency', text: 'В какой валюте осуществляется продажа?' },
                        { id: 'deliveryTime', text: 'В какие сроки должен быть доставлен товар?' },
                        { id: 'packaging', text: 'Как упаковывать продукцию?' },
                        { id: 'warehouse', text: 'Где находится склад HarvUnity?' }
                    ]
                },
                {
                    id: 'register',
                    title: 'Регистрация',
                    questions: [
                        { id: 'howReg', text: 'Как зарегистрироваться на сайте?' }
                    ]
                },
                {
                    id: 'order',
                    title: 'Оформление заказа',
                    questions: [
                        { id: 'phoneProfile', text: 'Как изменить номер телефона, указанный для курьерской доставки?' },
                        { id: 'cancelOrder', text: 'Как отменить оформленный заказ?' },
                        { id: 'cantGet', text: 'Если не успеваю принять заказ?' },
                        { id: 'howGet', text: 'Как получить заказ?' },
                        { id: 'howTrack', text: 'Как я могу отследить заказ?' },
                        { id: 'howControl', text: 'Как добавить или удалить товар из оформленного заказа?' },
                        { id: 'howReserve', text: 'Как работает резерв заказа?' },
                        { id: 'howOrder', text: 'Как заказать?' },
                    ]
                },
                {
                    id: 'pay',
                    title: 'Оплата',
                    questions: [
                        { id: 'howPay', text: 'Как оплатить заказ?' }
                    ]
                },
                {
                    id: 'deliver',
                    title: 'Доставка',
                    questions: [
                        { id: 'deliverAdress', text: 'Как изменить адрес курьерской доставки?' },
                        { id: 'deliverGivePoint', text: 'Как изменить пункт выдачи для уже оформленного заказа?' },
                        { id: 'howDeliver', text: 'Как происходит доставка?' },
                        { id: 'howFastDeliver', text: 'Как быстро доставят мой заказ?' },
                    ]
                },
                {
                    id: 'moneyBack',
                    title: 'Возврат товаров и денег',
                    questions: [
                        { id: 'moneyReturn', text: 'Вернут ли мне плату за доставку товара?' },
                        { id: 'whitchCard', text: 'На какую карту придут деньги?' },
                        { id: 'howReturnMoney', text: 'Как мне вернут деньги?'},
                        { id: 'anotherItem', text: 'Что делать, если в моем заказе лишний товар?' },
                        { id: 'itemDefects', text: 'Что делать, если мне не пришел товар / пришел, но не тот / пришел, но не весь / пришел некачественный?' },
                        { id: 'howReturnItem', text: 'Как вернуть товар?' },
                    ]
                },
                {
                    id: 'consultation',
                    title: 'Консультация по товару',
                    questions: [
                        { id: 'whereConsultation', text: 'Где получить консультацию по товару?' },
                    ]
                },
            ]
        };
    }
}
</script>
