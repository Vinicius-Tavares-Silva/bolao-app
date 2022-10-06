<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          
          <ion-tab-button tab="sumary" href="/home/sumary">
            <ion-icon :icon="calendar" />
            <ion-label>Resumo</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="scoreboard" href="/home/scoreboard">
            <ion-icon :icon="list" />
            <ion-label>Classificação</ion-label>
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
  import { calendar, list } from 'ionicons/icons';

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
        calendar,
        list
      };
    },
  };
</script>