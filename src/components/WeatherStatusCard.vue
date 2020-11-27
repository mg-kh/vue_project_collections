<template>
  <div class="card text-center border-0 mt-3">
    <div class="card-header bg-transparent border-0 py-0">
      <p class="weather__status">
        <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
        <span class="weather__desc">{{ weatherFactsObject.stateName }}</span>
      </p>
    </div>
    <div class="card-body py-0">
      <p class="weather__status">
        {{ weatherFactsObject.weatherStatus }}
        <span class="weather__desc">{{ weatherFactsObject.weatherDesc }}</span>
      </p>
      <p class="temperature__container">
        Temperature
        <span class="temperature"
          >{{ weatherFactsObject.temperature }}
          <sup>
            <font-awesome-icon
              icon="temperature-high"
            ></font-awesome-icon> </sup
          >C
        </span>
      </p>
      <p class="windspeed__container">
        Wind Speed
        <span class="windspeed"
          >{{ (weatherFactsObject.wind__speed * 2.23).toFixed(2) }} MPH</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: {
    weatherFactsObject: {
      type: Object,
      required: true,
      default: function() {
        return {
          weatherStatus: "",
          weatherDesc: "",
          stateName: "",
          temperature: "",
          wind__speed: "",
        };
      },
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.card {
  .weather__status {
    font-size: 80px;
    position: relative;
    font-style: italic;
    font-weight: bold;
    margin: 5px auto;
    color: rgb(207, 207, 207);
    .weather__desc {
      z-index: 10;
      color: #979797;
      position: absolute;
      font-size: 26px;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      top: 60%;
      left: 50%;
    }
  }
  .temperature__container {
    font-size: 43px;
    position: relative;
    font-style: italic;
    font-weight: bold;
    margin: 20px auto;
    color: rgb(207, 207, 207);
    .temperature {
      z-index: 10;
      color: #979797;
      position: absolute;
      font-size: 21px;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      top: 79%;
      left: 50%;
    }
  }
  .windspeed__container {
    font-size: 43px;
    position: relative;
    font-style: italic;
    font-weight: bold;
    margin: 5px auto;
    color: rgb(207, 207, 207);
    .windspeed {
      z-index: 10;
      color: #979797;
      position: absolute;
      font-size: 21px;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      top: 79%;
      left: 50%;
    }
  }
}
</style>
