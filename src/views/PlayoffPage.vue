<template>
  <ion-page>    
    <ion-content>
      <ion-accordion-group>
        <ion-accordion value="a">
          <ion-item slot="header" color="light">
            <ion-label>Oitavas</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="b">
          <ion-item slot="header" color="light">
            <ion-label>Quartas</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="c">
          <ion-item slot="header" color="light">
            <ion-label>Semi</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            Preencher Resultados
          </div>
        </ion-accordion>
        <ion-accordion value="d">
          <ion-item slot="header" color="light">
            <ion-label>Final</ion-label>
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
  name: 'PlayoffPage',
  components: { IonAccordionGroup, IonAccordion, IonItem, IonLabel }
});
</script>