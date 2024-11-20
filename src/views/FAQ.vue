<template>
    <div class="faq-container">
        <div class="faq">
            <FAQQuestions :setActiveAnswer="setActiveAnswer" :activeButtons="activeButtons" :toggleActive="toggleActive"
                :sections="sections" />
            <FAQAnswers :activeAnswer="activeAnswer" @open-popup="showPopup = true" />
        </div>
        <div class="popup" v-if="showPopup" @click="closePopup">
            <div class="popup-content" @click.stop>
                <form>
                    <button class="back" type="button" @click="closePopup">
                        <img src="../assets/img/close.png" alt="">
                    </button>
                    <p>Как мы можем помочь?</p>
                    <div class="container">
                        <p>Name: *</p>
                        <input type="text" name="name" id="name" required>
                    </div>
                    <div class="container">
                        <p>Email: *</p>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div class="container">
                        <p>Message: *</p>
                        <textarea name="message" id="message" required></textarea>
                    </div>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FAQQuestions from '../components/FAQQuestions.vue';
import FAQAnswers from '../components/FAQAnswers.vue';

export default {
    components: {
        FAQQuestions,
        FAQAnswers
    },
    data() {
        return {
            showPopup: false,
            activeButtons: {
                forSuppliers: false,
                register: false,
                order: false,
                pay: false,
                deliver: false,
                moneyBack: false,
                consultation: false
            },
            activeAnswer: 'currency',
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
                        { id: 'howReturnMoney', text: 'Как мне вернут деньги?' },
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
    },
    methods: {
        toggleActive(buttonName) {
            Object.keys(this.activeButtons).forEach(key => {
                this.activeButtons[key] = false;
            });
            this.activeButtons[buttonName] = true;
        },
        setActiveAnswer(answer) {
            this.activeAnswer = answer;
        },
        closePopup() {
            this.showPopup = false;
        },
        findSectionByQuestionId(questionId) {
            for (const section of this.sections) {
                const question = section.questions.find(q => q.id === questionId);
                if (question) {
                    return section.id;
                }
            }
            return null;
        }
    },
    created() {
        const questionId = this.$route.query.section;
        if (questionId) {
            this.activeAnswer = questionId;
            const sectionId = this.findSectionByQuestionId(questionId);
            if (sectionId) {
                this.toggleActive(sectionId);
            }
        }
    },
    watch: {
        '$route.query.section': {
            handler(newQuestionId) {
                if (newQuestionId) {
                    this.activeAnswer = newQuestionId;
                    const sectionId = this.findSectionByQuestionId(newQuestionId);
                    if (sectionId) {
                        this.toggleActive(sectionId);
                    }
                }
            },
            immediate: true
        }
    }
}
</script>