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
        },
        sections: {
            type: Array,
            required: true
        }
    }
}
</script>
