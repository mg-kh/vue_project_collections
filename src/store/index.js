import { createStore } from "vuex";
import axios from "axios";
const apiKey = "5650d4c16ed3de79f6d4a3359ab6238b";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export default createStore({
  state: {
    weatherConditions: null,
  },
  getters: {
    getWeatherData(state) {
      return state.weatherConditions;
    },
  },
  mutations: {
    setWeatherData(state, weatherData) {
      const weatherDataObj = {
        weatherStatus: weatherData.weather[0].main,
        weatherDesc: weatherData.weather[0].description,
        stateName: weatherData.name,
        temperature: weatherData.main.temp,
        wind__speed: weatherData.wind.speed,
      };
      state.weatherConditions = weatherDataObj;
    },
  },
  actions: {
    getWeather({ commit }, stateLocation) {
      axios({
        method: "get",
        url: `${baseUrl}`,
        params: {
          q: `${stateLocation},MM`,
          appid: apiKey,
          units: "metric",
        },
      }).then((resp) => {
        console.log(resp.data);
        commit("setWeatherData", resp.data);
      });
    },
  },
  modules: {},
});
