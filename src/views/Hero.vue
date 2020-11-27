<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card text-center shadow">
          <div class="card-body">
            <h3 class="mb-4">Hero Lists ({{ heroCount }})</h3>
            <input
              type="text"
              ref="heroInput"
              v-model="heroData"
              @keypress.enter="addHero"
              class="form-control"
            />
            <hr />
            <ul class="list-group">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
                v-for="(hero, i) in allHeros"
                :key="i"
              >
                <p class="m-0">{{ hero }}</p>
                <span
                  @click="deleteHero(i)"
                  class="text-danger font-weight-bold"
                  >X</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      heroData: "",
      allHeros: ["Ion Man", "Thor", "Spider Man"],
    };
  },
  computed: {
    heroCount() {
      return this.allHeros.length;
    },
  },
  mounted() {
    this.$refs.heroInput.focus();
  },
  methods: {
    addHero() {
      this.allHeros.push(this.heroData);
      this.heroData = "";
    },
    deleteHero(i) {
      this.allHeros.splice(i, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
}
</style>
