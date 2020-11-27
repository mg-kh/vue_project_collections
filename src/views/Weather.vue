<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <h1 class="text-secondary">Search Weather Condition For Myanmar</h1>
        <weather-map></weather-map>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import WeatherMap from "@/plugins/WeatherMap.vue";
import { onMounted, ref, computed } from "vue";
import { log } from "@tensorflow/tfjs-core";
export default {
  components: {
    FontAwesomeIcon,
    WeatherMap,
  },
};
</script>

<style lang="scss" scoped>
// .container {
//   width: 600px;
//   margin: auto;

//   button {
//     border: none;
//     box-shadow: 1px 1px 1px 1px grey;
//     cursor: pointer;
//     padding: 0.5rem 1rem;
//     outline: none;
//     &:hover {
//       box-shadow: none;
//     }
//   }
// }
</style>
