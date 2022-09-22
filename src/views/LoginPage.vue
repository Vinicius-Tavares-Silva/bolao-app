<template>
  <ion-page>    
    <ion-content>
      <ion-card id="container">
        <ion-card-header>
          <ion-card-title>Faça seu Login!</ion-card-title>
          <ion-card-subtitle>Bolão 2022</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Senha</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-button router-link="/home" expand="block" @click="() => { store.logIn() }">Entrar</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useStore } from '@/store/useStore';

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
  setup() {
      const store = useStore()
      return { store }
  },
  created() {
    this.store.logOut()
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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