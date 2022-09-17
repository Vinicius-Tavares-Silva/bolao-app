<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import gql from 'graphql-tag'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  // data: () => ({
  //   project: null,
  // }),
  // apollo : {
  //   projects: gql`query {
  //     projects {
  //       id
  //       title
  //       authors {
  //         name
  //       }
  //     }
  //   }`,
  // },
  // mounted() {
  //   console.log('montou');
  //   console.log('querie', this.$options.apollo.projects);
  //   this.project = this.$options.apollo.projects
  //   console.log('project', this.project);
  // }
});
</script>