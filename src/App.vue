<template>
  <ion-app>
    <SideMenu v-if="store.getLogged" />
    <ion-router-outlet
      id="main-content"
      :class="store.getLogged ? (onIphone ? 'safari-view-container' : 'chrome-view-container') : ''"
    />
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import SideMenu from './components/SideMenu.vue';
import { useStore } from '@/store/useStore';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu,
  },
  setup() {
      const store = useStore()
      return { store }
  },
  data: () => ({
    onIphone: false,
  }),
  created() {
    this.checkBrowser()
  },
  updated() {
    console.log(this.routeName);
  },
  methods: {
    checkBrowser() {
      const userAgent = window.navigator.userAgent
      if (userAgent.includes('iPhone')) {
        this.onIphone = true
      }
    }
  },
  

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