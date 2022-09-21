<template>
  <ion-page>
    <SideMenu />
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          
          <ion-tab-button tab="group" href="/bet/group">
            <ion-icon :icon="triangle" />
            <ion-label>Fase de Grupos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="playoff" href="/bet/playoff">
            <ion-icon :icon="ellipse" />
            <ion-label>Mata-Mata</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';
  import SideMenu from './SideMenu'

  export default {
    name: 'HomeTabs',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
      SideMenu
    },
    setup() {
      return {
        ellipse,
        square,
        triangle,
      };
    },
  };
</script>