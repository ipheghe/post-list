<template>
  <div class="post-list__container">
    <p class="post-list__label">Sortable Post List</p>
    <v-progress-circular
      indeterminate
      class="spinner"
      v-if="posts.length < 1"
    ></v-progress-circular>
    <transition-group name="fade" tag="div" v-else>
      <div v-for="(item, idx) in posts" :key="item.id">
        <div class="post-list__card">
          <p class="post-list__card__label">
            {{ `Post ${item.id}` }}
          </p>
          <div class="post-list__btn__container">
            <v-btn
              small
              icon
              class="darken-4 arrow-btn-up"
              v-if="idx !== 0"
              @click="moveUp({ index: idx, item })"
            >
              <v-icon small color="black">expand_less</v-icon>
            </v-btn>
            <v-btn
              small
              icon
              class="darken-4 arrow-btn-down"
              v-if="idx !== 4"
              @click="moveDown({ index: idx, item })"
            >
              <v-icon small color="black">expand_more</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  computed: {
    /**
     * method to return posts from state
     *
     * @return {array} - posts from state
     */
    posts() {
      return this.$store.getters.posts;
    }
  },
  methods: {
    /**
     * Method to Move Card Up
     *
     * @param {object} payload - index, item
     * @return {void}
     */
    moveUp(payload) {
      this.$store.dispatch('moveUp', payload);
    },
    /**
     * Method to Move Card Down
     *
     * @param {object} payload - index, item
     * @return {void}
     */
    moveDown(payload) {
      this.$store.dispatch('moveDown', payload);
    }
  }
};
</script>

<style scoped>
.fade-move {
  transition: transform ease-in-out 1s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list__container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0px 10px;
  background: none;
}
.post-list__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #000;
  background-color: white;
  min-height: 100px;
}
.post-list__btn__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.post-list__card__label {
  margin: 0;
  padding: 0;
}
.post-list__label {
  color: #fff;
  font-size: 24px;
}
.v-progress-circular {
  position: absolute;
  top: 50%;
  left: 40%;
  color: #9900ff;
}
</style>
