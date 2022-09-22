<template>
  <ion-app>
    <SideMenu />
    <ion-router-outlet
      id="main-content"
      :class="onIphone ? 'safari-view-container' : 'chrome-view-container'"
    />
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import SideMenu from './components/SideMenu.vue'
// import gql from 'graphql-tag'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu,
  },
  data: () => ({
    onIphone: false,
  }),
  created() {
    this.checkBrowser()
  },
  methods: {
    checkBrowser() {
      const userAgent = window.navigator.userAgent
      if (userAgent.includes('iPhone')) {
        this.onIphone = true
      }
    }
  }
  

});
</script>

<style scoped>
  .safari-view-container {
    margin-top: 44px;
  }
  .chrome-view-container {
    margin-top: 56px;
  }
</style>