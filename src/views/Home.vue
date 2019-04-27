<template>
  <Home />
</template>

<script>
import Home from '@/components/Home';

export default {
  components: {
    Home
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    /**
     * Method to get posts
     *
     * @return {void}
     */
    getPosts() {
      this.$store.dispatch('getPosts');
    }
  }
};
</script>
