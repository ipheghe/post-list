<template>
  <v-container fluid class="container">
    <v-layout row justify-space-between>
      <v-flex xs12 md8 class="sub-container post">
        <post-list></post-list>
      </v-flex>
      <v-flex xs12 md8 class="sub-container time-travel">
        <time-travel></time-travel>
      </v-flex>
    </v-layout>
    <div class="angled-background" />
  </v-container>
</template>

<script>
import PostList from '@/components/PostList';
import TimeTravel from '@/components/TimeTravel';

export default {
  name: 'Home',
  data: () => ({}),
  components: {
    PostList,
    TimeTravel
  }
};
</script>

<style scoped>
.container {
  background-color: #ddd;
  position: relative;
  min-height: 100vh;
  z-index: 1;
}
.sub-container {
  z-index: 10;
  padding-top: 10px;
  width: 90%;
}
.sub-container.post {
  padding-right: 40px;
  padding-left: 30px;
}
.sub-container.time-travel {
  padding-left: 40px;
  padding-right: 30px;
}
.angled-background {
  height: 150px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-clip-path: polygon(100% 0, 0 0, 0 18%);
  clip-path: polygon(100% 0, 0 0, 0 100%);
  background-color: #9900ff;
  z-index: 4;
}
</style>
