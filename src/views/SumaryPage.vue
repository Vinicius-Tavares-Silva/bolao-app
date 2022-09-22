<template>
  <ion-page>    
    <ion-content>
      <div id="container">
        <strong>Jogos do dia</strong>
      </div>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>20/11/2022 12:00</ion-card-subtitle>
          <ion-card-title>Holanda 1 x 0 Chile</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean. -->
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>20/11/2022 15:00</ion-card-subtitle>
          <ion-card-title>Brasil 1 x 0 Suiça</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean. -->
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>20/11/2022 18:00</ion-card-subtitle>
          <ion-card-title>Argentina 1 x 0 Polônia</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean. -->
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SumaryPage',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle }
});
</script>

<style scoped>
#container {
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>