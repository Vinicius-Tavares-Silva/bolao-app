<template>
  <ion-page>    
    <ion-content>
      <ion-accordion-group>
        <ion-accordion value="a">
          <ion-item slot="header" color="light">
            <ion-label>Grupo A</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
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
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GroupPage',
  components: { IonAccordionGroup, IonAccordion, IonItem, IonLabel }
});
</script>