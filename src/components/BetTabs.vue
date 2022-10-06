<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          
          <ion-tab-button tab="group" href="/bet/group">
            <ion-icon :icon="albums" />
            <ion-label>Fase de Grupos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="playoff" href="/bet/playoff">
            <ion-icon :icon="shuffle" />
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
  import { albums, shuffle } from 'ionicons/icons';

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
    },
    setup() {
      return {
        albums,
        shuffle
      };
    },
  };
</script>