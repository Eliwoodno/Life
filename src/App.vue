<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import '@/styles/main.scss'
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
