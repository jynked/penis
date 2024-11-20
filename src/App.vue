<template>
  <HeaderMain />
  <router-view />
  <FooterMain/>
</template>

<script>
import FooterMain from './components/footerMain.vue';
import HeaderMain from './components/headerMain.vue';



export default {
  components: {
    HeaderMain,
    FooterMain,
  }
}
</script>

<style lang="scss">
@import url('../src/assets/styles/style.scss');
</style>