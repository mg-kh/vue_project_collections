<template>
  <div class="container">
    <button
      class="btn btn-primary"
      v-if="isWeatherStatusShow"
      @click="resetStyles"
    >
      <font-awesome-icon :icon="'redo'"></font-awesome-icon>
    </button>
    <div class="row">
      <div class="col-6">
        <div class="map__container">
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 700">
            <g>
              <path
                id="Mon_State"
                class="st0"
                d="M183.2,485.1l-0.6-2.6l0.4,3L183.2,485.1z M179.9,460.8l1.2-9l-3.4-0.9L179.9,460.8z
	 M186.9,450.6l-1.4-1.3l-5.7,17.1l7.5,40.5l3.6-6.8l7.2,2.9h2.4l0.6-7.7l-12.3-23.2l-0.4-8.1l10.3-2L186.9,450.6z M175,409.6
	l-6.2,5.5l-11.6,3.1l12.5,12.1l3.6,21.5l11-3.1L175,409.6z"
              />
              <path
                id="Sagaing_Region"
                class="st0"
                d="M162.3,73.6l-11-10.2l-18.6,3.8L99,91.2l0.9,20.7l-18,24.1l3.3,13.5L66.1,192l-4,42.3
	l9.7,20.5l5.1,11.6l21.8-2l7.6,8l14.2-0.6l8.9-10.6l-4.3-52.1l5.7-9l3.7,4.6l4.2-0.2l7.9-12.3l-5.6-6.5l9.4-4.1l-0.6-10l-13.9-1.5
	l-13-18.4l7.5-0.8l-3.3-19.3l7.1-5.7l-5.8-27.4l7.6-20l24-1.2l3.1-3.8L162.3,73.6z"
              />
              <path
                id="Mandalay_Region"
                class="st0"
                d="M134.4,204.8l-3.7-4.6l-5.7,9l4.3,52.1l-8.9,10.6l-14.2,0.6l-17.3,14.4l-0.1,8.9l8.8,4.3
	l0.9,10.5l16.9-7.1l6,44.7l16-0.3l3.8,0.1l9.1-0.9l-9.9-18.3l7-29.4l-12.5-7.4l4.3-17l18.1-7.9l-22.7-35l17-6.9l-17-4.6l3.9-16
	L134.4,204.8z"
              />
              <path
                id="Rakhine_State"
                class="st0"
                d="M51.4,369.1l-6.6-0.2l6.9,7L51.4,369.1z M55.3,347.4l-5.3-0.1l4.8,7.2l2.3,0.3l3.8-4.8
	L55.3,347.4z M46,337.8l-0.6-4.4l-3.2-2.3L46,337.8z M29.6,335.5l-2-7.7l-1.5-1.5L29.6,335.5z M8,279.2l-6.3,9.3l18.2,31.7
	l-3.2-15.5l10.2,13.3l-5.6,4.2l4.2,2.3l5.8-14.8l2,25.4L33,326l20.4,6.3l-4.8,6.9l6.8-1l-2.2,4.5l8.3,5.6l-1.3,4.8l-5,3l-8.1-6.8
	l-2.3,2.8l14.8,17.2l4.5-18.6l-1,18.5l8,4.2l9.5,44.4l6.2,3.2l4.2-12.4l-1.5-21.8l-1-16.7l-29.7-65.5l-7.1-6.7l-0.6,6.8l-8.5-0.1
	L17,283.1L8,279.2z"
              />
              <path
                id="Hakha"
                class="st0"
                d="M44.5,188.3l-5.5-3.9l4,15.1l-11.7,31.5l3,18.8l-6.6,9.3l-9.4-5.9l-3.6,6.3l2.2,23.8l25.5,21.5
	l8.5,0.1l0.6-6.8l7.1,6.7l7.7,0.3l-4.3-70.6l4-42.3L44.5,188.3z"
              />
              <path
                id="Bago_Region"
                class="st0"
                d="M137.4,347.9l-16,0.3l0.7,10.4l-20.9,9.3l-1.2,15l1.4,1.4l18.2,33.7l10.4-10.2l12.7,26.7
	l12.7,3.3l1.9-19.6l11.6-3.1l-1-21.1l-8.4-16.9l-9.5-0.5l-8.7-28.6L137.4,347.9z"
              />
              <path
                id="Kachin_State"
                class="st0"
                d="M181.3,21.5l-9.6,10l0.3,12.1l-15.6,11l6.5,18.9l-3.1,3.8l-24,1.2l-7.6,20l5.8,27.4l-7.1,5.7
	l3.3,19.3l-7.5,0.8l13,18.4l13.9,1.5l0.6,10l11.4,17.9l20.8-8l-3.7-31.8l20-31.6l18-8.9l-4.6-9.3l6.9-19.2L216.4,55l-12.6,1.9
	L198,34.3L181.3,21.5z"
              />
              <path
                id="Kayah_State"
                class="st0"
                d="M170.3,333.2l-3.8-3.5l-10.8,24.6l17.6,25.8l12.5-1.2l3.9-34.6L170.3,333.2z"
              />
              <path
                id="Magway_Region"
                class="st0"
                d="M71.8,254.9l-9.7-20.5l4.3,70.6l-7.7-0.3l29.7,65.5l1,16.7l10.5-4l1.2-15l20.9-9.3
	l-0.7-10.4l-6-44.7l-16.9,7.1l-0.9-10.5l-8.8-4.3l0.1-8.9l17.3-14.4l-7.6-8l-21.8,2L71.8,254.9z"
              />
              <path
                id="Kayin_State"
                class="st0"
                d="M155.8,354.4l-5.5-7.3l-9.1,0.9l8.7,28.6l9.5,0.5l8.4,16.9l1,21.1l6.2-5.5l9.3,39.1l1.2,0.5
	l1.4,1.3l11.6,11.3l-10.3,2l0.4,8.1l12.3,23.2l11.7-4.7l-0.4-23.8l11.7-11.5l-7.9,3.3l-5.1-20.9l-24.8-27.7l-12.8-29.8L155.8,354.4z
	"
              />
              <path
                id="Ayeyarwady_Region"
                class="st0"
                d="M41.9,534.3l-0.1-2.6l-0.5,3L41.9,534.3z M52.1,507.2l0.7-1.4l-1.6,1.9L52.1,507.2z
	 M88.4,475.4l0.6-5.1l-3.3,4.4L88.4,475.4z M75.4,474l7.7-14l-8.4,8.4L75.4,474z M101.5,384.3l-1.4-1.4l-10.5,4l1.5,21.8l-4.2,12.4
	l-6.2-3.2l-10.8,51.3l16.3-18.9l-5.5,20.3l7.5-7.8l-2.4,10.5l8.9-13.6l-4.8,15.8l9.5-12.3l2.5,12.4l4.9-12.4l1.2,14.9l20.5-22.8
	l-6.1-3.5l-2.8-34L101.5,384.3z"
              />
              <path
                id="Shan_State"
                class="st0"
                d="M220.9,205.7l-5-17.6l6.8-6.7l-40.3,10l-20.8,8l-11.4-17.9l-9.4,4.1l5.6,6.5l-7.9,12.3l-3.9,16
	l17,4.6l-17,6.9l22.7,35l-18.1,7.9l-4.3,17l12.5,7.4l-7,29.4l9.9,18.3l5.5,7.3l10.8-24.6l3.8,3.5l19.5,11.3l5.8-8.3l28.2,2.1
	l5.8-12.4l14.4-1.9l-2.3-8.1l21.8,2.3l4-13.8l14.2-5.9l2.4-15.4l14.4-7.9l-2.6-8.2l-29.6,12l-8.1-22l-25.7-3.1l12.2-29.3l-22.3-8.3
	L220.9,205.7z"
              />
              <path
                id="Yangon"
                class="st0"
                d="M142.7,434.5L130,407.7L119.6,418l2.8,34l6.1,3.5l10.5-2.1l-5.5-11.5l10.8,9.9l10.9-14L142.7,434.5
	z"
              />
              <path
                id="Tanintharyi_Region"
                class="st0"
                d="M196,679l-1.4-1l0.1,1L196,679z M202.5,670.1l-4.2,3.5l0.2,3.9L202.5,670.1z
	 M200.6,669.8l1.5-3.4l-2-0.7L200.6,669.8z M191.1,656.2l0,2.4l1.1-1.4L191.1,656.2z M201,655.9l0.9-1.6l-1.4,0.5L201,655.9z
	 M212.4,644.2l-2-2l0.1,3.3L212.4,644.2z M191.1,643.3l1.4-2.1l-1.8,0.2L191.1,643.3z M201.5,641l-4.8,1.3l5.7,6.6L201.5,641z
	 M208.7,639.7l0.4-1.2l-0.6,0.3L208.7,639.7z M212,638.9l-0.6-3.3l-1.6,3.8L212,638.9z M203.2,630.2l-1.8-0.7l0.9,1.9L203.2,630.2z
	 M212.1,611.6l-5.7,0.3l5.4,8.8L212.1,611.6z M203.5,621.4l-0.2-9.8l-3.8,11.7L203.5,621.4z M176.8,611.9l-1.1-0.4l1.2,0.7
	L176.8,611.9z M195.9,613.2l-1.3-3.9l2.5,7.9L195.9,613.2z M183.1,609.4l0.2,0.9L183,608L183.1,609.4z M203.5,609.3l-0.6-1.4
	l-0.4,1.7L203.5,609.3z M202.8,607.3l-0.3-1.6l-0.8,0.7L202.8,607.3z M211.3,604.5l-2.7-3.5l1.3,7.5l5.9-1.4L211.3,604.5z
	 M197.3,598.1l1.3,2l-2.2-5.1L197.3,598.1z M197.3,592.4l-0.7-2.1l-4.3,4L197.3,592.4z M210.9,590.9l-0.3-3.5l-0.9,3L210.9,590.9z
	 M203.5,587.7l-0.9-2.4l-0.9,1.9L203.5,587.7z M189.5,585.8l-1.3-0.9l0.9,1.7L189.5,585.8z M207.4,585.4l-2.8-3.9l-0.4,11.8
	L207.4,585.4z M189.6,578.8l-0.7-1.3l-0.1,1.2L189.6,578.8z M203.9,568l-1.6-4.4l1.8,10.2L203.9,568z M191.6,544.3l0.2-2.6l-0.6,1
	L191.6,544.3z M198,503l-7.2-2.9l-3.6,6.8l7.7,7.9l-4.7-1.3l8.5,39.1l1.6-18l12.8,29.9l4.2,28.4l-5.5,3.6l6,8.2l0,1.1l-1.9,1.5
	l-3.8,1.4l11.3,6.2l-5.9,25.9l-8.4,7l2.8,24.5l7.4-23.6l28.6-38l-17.7-41.4l-0.1-28.3l-29.7-38.4L198,503z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div class="col-6">
        <weather-status-card
          v-if="isWeatherStatusShow"
          :weatherFactsObject="weatherDataObject"
        ></weather-status-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref, computed, watch } from "vue";
import { log } from "@tensorflow/tfjs-core";
import WeatherStatusCard from "@/components/WeatherStatusCard";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    WeatherStatusCard,
    FontAwesomeIcon,
  },
  setup() {
    const svgPaths = document.getElementsByTagName("path");
    const store = useStore();
    const isWeatherStatusShow = ref(false);
    const weatherDataObject = computed(() => {
      return store.getters.getWeatherData;
    });
    watch(weatherDataObject, (value) => {
      if (value != null) {
        isWeatherStatusShow.value = true;
      }
    });

    onMounted(() => {
      svgPaths.forEach((path) => {
        path.addEventListener("click", (e) => {
          centerTheSelectedPart(e.target);
          fetchWeatherData(e.target.id);
          hideAll();
        });
      });
    });

    // ! getting weather data
    function fetchWeatherData(location) {
      const locationReFormat = location.split("_").join(" ");
      store.dispatch("getWeather", locationReFormat);
    }

    // ! center the selected map path
    function centerTheSelectedPart(element) {
      // element.style.transform = "scale(2)";
      const x = element.getBBox().x;
      const y = element.getBBox().y;
      const svgContainer = document.querySelector(".map__container");
      const svgContainerWidth = svgContainer.offsetWidth;
      const svgContainerHeight = svgContainer.offsetHeight;
      const centerlizeWidth = svgContainerWidth / 2 - x;
      const centerlizeHeight = svgContainerHeight / 2 - y;

      element.style.transform = `scale(2.5) translate(${centerlizeWidth -
        120}px , ${centerlizeHeight - 250}px)`;

      element.classList.add("bigger__location");
    }

    // ! to hide all map
    function hideAll() {
      svgPaths.forEach((path) => {
        path.style.display = "none";
      });
    }

    //  ! reset the map to original state
    function resetStyles() {
      isWeatherStatusShow.value = false;
      svgPaths.forEach((path) => {
        path.style.transform = "scale(1) translate(0px , 0px)";
        path.classList.remove("bigger__location");
        path.style.display = "block";
        path.style.fill = "#95c6c7";
      });
    }

    return {
      resetStyles,
      fetchWeatherData,
      weatherDataObject,
      isWeatherStatusShow,
    };
  },
};
</script>

<style lang="scss" scoped>
svg {
  overflow: unset;
  .st0 {
    fill: #95c6c7;
    stroke: #ffffff;
    stroke-width: 2.519;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      fill: #e91e63;
    }
  }
}
.bigger__location {
  display: block !important;
  fill: #e91e63 !important;
}
.map__container {
  width: 250px;
}
</style>
