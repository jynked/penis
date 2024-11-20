<template>
    <div class="faq-container">
        <div class="faq">
            <FAQQuestions :setActiveAnswer="setActiveAnswer" :activeButtons="activeButtons"
                :toggleActive="toggleActive" />
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
            showPopup: false,  // Начальное состояние попапа
            activeButtons: {
                forSuppliers: false,
                register: false,
                order: false,
            },
            activeAnswer: 'currency',
        };
    },
    methods: {
        toggleActive(buttonName) {
            this.activeButtons[buttonName] = !this.activeButtons[buttonName];
        },
        setActiveAnswer(answer) {
            this.activeAnswer = answer;
        },
        closePopup() {
            this.showPopup = false;  // Закрываем попап
        }
    }
}
</script>