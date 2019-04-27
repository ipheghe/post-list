<template>
  <div class="time-travel__container">
    <div class="time-travel__label">List of actions committed</div>
    <div class="time-travel__card__container">
      <div v-for="(item, idx) in timeTravelData" :key="idx">
        <div class="time-travel__card">
          <p class="time-travel__card__label">
            {{
              `Moved post ${item.postId} from index ${
                item.previousIndex
              } to index ${item.currentIndex}`
            }}
          </p>
          <v-btn
            medium
            class="time-travel__btn"
            @click="
              timeTravel({
                index: idx
              })
            "
          >
            Time Travel
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeTravel',
  computed: {
    /**
     * Method to return timeTravelData from state
     *
     * @return {array} - array list of time travel data
     */
    timeTravelData() {
      return this.$store.getters.timeTravelData;
    }
  },
  methods: {
    /**
     * Method to time travel
     *
     * @param {object} payload - index
     * @return {void}
     */
    timeTravel(payload) {
      this.$store.dispatch('timeTravel', payload);
    }
  }
};
</script>

<style scoped>
.time-travel__container {
  width: 100%;
  min-height: 40%;
  background-color: #ddd;
  border: 1px solid #888c91;
}
.time-travel__label {
  background-color: white;
  color: black;
  padding: 20px 10px;
  vertical-align: middle;
}
.time-travel__card__container {
  width: 100%;
  padding: 30px 10px;
}
.time-travel__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 0;
  border: 1px solid #888c91;
  border-top: #888c91;
  background-color: white;
}
.time-travel__card__label {
  margin: 0;
  padding: 0;
}
.time-travel__btn {
  background-color: #4caf50 !important;
  color: #000;
  font-size: 14px;
  text-transform: capitalize;
}
</style>
