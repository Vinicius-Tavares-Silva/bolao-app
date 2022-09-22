<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item href="/home">
          <ion-label>Início</ion-label>
        </ion-item>
        <ion-item href="/bet">
          <ion-label>Aposta</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Bolão 2022</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script>
  import { defineComponent } from 'vue';
  import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList
  } from '@ionic/vue';

  export default defineComponent({
    name: 'SideMenu',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonTitle,
      IonToolbar,
      IonItem,
      IonLabel,
      IonList
    },
  });
</script>