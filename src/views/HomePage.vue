<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong>{{ projects }}</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { useStore } from '@/store/useStore'

const QUERY_PROJECTS = gql`
  query {
    projects {
      id
      title
      authors {
        name
      }
    }
  }`

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const store = useStore()
    const { result, error } = useQuery(QUERY_PROJECTS);
    const projects = computed(() => result ?? [])

    return {
      store,
      projects,
      error
    }
  },
  // data: () => ({
  //   projects: null,
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
  mounted() {
    console.log('montou');
    this.store.increment()
    // const { result, loading, error } = useQuery(QUERY_PROJECTS);
    // console.log(loading, error);
    // this.projects = result
    // console.log('project', this.project);
  }
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
