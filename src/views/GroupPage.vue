<template>
  <ion-page>    
    <ion-content>
      <ion-accordion-group>
        <ion-accordion value="a">
          <ion-item slot="header" color="light">
            <ion-label>Grupo A</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-row style="border-bottom: groove;">
              <ion-col size="5">
                <ion-label>Classificação</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label>Pts</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>GP</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>SG</ion-label>
              </ion-col>
            </ion-row>
            <ion-row style="border-bottom: groove;">
             <ion-col size="5">
                <img class="flag-logo ion-margin-end" src="../assets/flags/cat.png" alt="">
                <ion-label>Catar</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
            </ion-row>
            <ion-row style="border-bottom: groove;">
             <ion-col size="5">
                <img class="flag-logo ion-margin-end" src="../assets/flags/equ.png" alt="">
                <ion-label>Equador</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
            </ion-row>
            <ion-row style="border-bottom: groove;">
             <ion-col size="5">
                <img class="flag-logo ion-margin-end" src="../assets/flags/hol.png" alt="">
                <ion-label>Holanda</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
            </ion-row>
            <ion-row style="border-bottom: groove;">
             <ion-col size="5">
                <img class="flag-logo ion-margin-end" src="../assets/flags/sen.png" alt="">
                <ion-label>Senegal</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
              <ion-col size="2">
                <ion-label>0</ion-label>
              </ion-col>
            </ion-row>
            <ion-row>
             <ion-col size="6" class="ion-padding-top">
                <ion-item lines="none" class="ion-no-padding">
                  <ion-avatar class="flag-avatar ion-no-padding" slot="start">
                    <img src="../assets/flags/cat.png" alt="">
                  </ion-avatar>
                  <!-- <ion-label position="floating">
                    Catar
                  </ion-label> -->
                  <vue-number-input v-model="value" :min="0" :max="10" inline controls size="small" placeholder="Catar" class="ion-no-padding" ></vue-number-input>
                </ion-item>
                <!-- <ion-item>
                  
                  <vue-number-input v-model="value" :min="1" :max="10" inline controls size="small" ></vue-number-input>
                  <ion-input type="number"></ion-input>
                  <ion-label>Equador</ion-label>
                  <img class="flag-logo ion-margin-start" src="../assets/flags/equ.png" alt="">
                </ion-item> -->
             </ion-col>
             <ion-col size="6" class="ion-padding-top">
                <ion-item lines="none" class="ion-no-padding">
                  <ion-avatar class="flag-avatar" slot="end">
                    <img src="../assets/flags/cat.png" alt="">
                  </ion-avatar>
                  <!-- <ion-label position="floating">
                    Catar
                  </ion-label> -->
                  <vue-number-input v-model="value" :min="0" :max="10" inline controls size="small" placeholder="Catar" ></vue-number-input>
                </ion-item>
                <!-- <ion-item>
                  
                  <vue-number-input v-model="value" :min="1" :max="10" inline controls size="small" ></vue-number-input>
                  <ion-input type="number"></ion-input>
                  <ion-label>Equador</ion-label>
                  <img class="flag-logo ion-margin-start" src="../assets/flags/equ.png" alt="">
                </ion-item> -->
             </ion-col>
            </ion-row>
            <!-- <ion-row>
             <ion-col>
                <ion-item>
                  <img class="flag-logo ion-margin-end" src="../assets/flags/hol.png" alt="">
                  <ion-label>Holanda</ion-label>
                  <ion-input type="number"></ion-input>
                  <ion-label>X</ion-label>
                  <ion-input type="number"></ion-input>
                  <ion-label>Senegal</ion-label>
                  <img class="flag-logo ion-margin-start" src="../assets/flags/sen.png" alt="">
                </ion-item>
              </ion-col>
            </ion-row> -->
          </div>
        </ion-accordion>
        <ion-accordion value="b">
          <ion-item slot="header" color="light">
            <ion-label>Grupo B</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="c">
          <ion-item slot="header" color="light">
            <ion-label>Grupo C</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="d">
          <ion-item slot="header" color="light">
            <ion-label>Grupo D</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="e">
          <ion-item slot="header" color="light">
            <ion-label>Grupo E</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="f">
          <ion-item slot="header" color="light">
            <ion-label>Grupo F</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="g">
          <ion-item slot="header" color="light">
            <ion-label>Grupo G</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="h">
          <ion-item slot="header" color="light">
            <ion-label>Grupo H</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GroupPage',
  components: {
    IonPage,
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonAvatar,
  },
  data: () => ({
    value: null,
  }),
});
</script>

<style scoped>
 .flag-logo {
    width: 1rem !important;
  }
 .vue-number-input + .vue-number-input {
    margin-left: 0.5rem;
  }
  .flag-avatar  {     
    width:100% !important;  
    height : 100% !important;  
    max-width: 1.25rem !important;
    max-height: 1.25rem !important;
    margin: 0 0.5rem !important;
  }
  .right-input .item-native {
    padding-left: 0.25rem !important;
    padding-right: 0 !important;
  }
</style>