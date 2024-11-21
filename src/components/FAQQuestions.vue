<template>
    <div class="faq-questions">
        <div v-for="section in sections" :key="section.id">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + section.id"
                aria-expanded="false" :class="{ 'active': activeButtons[section.id] }"
                @click="handleButtonClick(section.id)">
                {{ section.title }}
            </button>
            <div class="collapse" :id="section.id">
                <div class="card card-body">
                    <button v-for="question in section.questions" :key="question.id" class="point"
                        @click="handleQuestionClick(question.id, section.id)" data-bs-toggle="collapse"
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
    name: 'FAQQuestions',
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
        },
        sections: {
            type: Array,
            required: true
        }
    },
    methods: {
        closeAllCollapse() {
            // Закрываем все открытые collapse элементы
            document.querySelectorAll('.collapse.show').forEach(collapse => {
                collapse.classList.remove('show');
            });
        },
        handleButtonClick(sectionId) {
            // Сначала закрываем все остальные секции
            this.closeAllCollapse();
            
            // Переключаем активное состояние кнопки
            this.toggleActive(sectionId);
            
            // Открываем только выбранную секцию
            const targetCollapse = document.getElementById(sectionId);
            if (targetCollapse) {
                targetCollapse.classList.add('show');
            }
        },
        handleQuestionClick(questionId, sectionId) {
            this.setActiveAnswer(questionId);
            this.toggleActive(sectionId);
            this.closeAllCollapse();
        }
    }
}
</script>

<style scoped>
/* Добавляем стили для активной кнопки, если они еще не определены в глобальных стилях */
.btn.active {
    background-color: #EEE !important;
    color: #222 !important;
}
</style>
