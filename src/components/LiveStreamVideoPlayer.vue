<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body text-center">
            <div class="input-group mb-3">
              <input
                type="text"
                v-model="streamUrl"
                class="form-control"
                placeholder="Enter Stream Url"
              />
              <div class="input-group-append">
                <button class="btn btn-success" @click="playVideo">
                  View
                </button>
              </div>
            </div>
            <select
              class="form-control mb-3"
              v-model="streamUrl"
              @change="playVideo"
            >
              <option value="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                >Big Buck Bunny</option
              >
              <option
                value="http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8"
                >Tear Of Steel</option
              >
              <option
                value="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
                >Science</option
              >
            </select>
            <video
              ref="videoPlayer"
              width="500"
              height="300"
              controls
              autoplay
              poster="https://picsum.photos/1000"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Hls = require("hls.js");
import { ref, onMounted } from "vue";
export default {
  setup() {
    const streamUrl = ref("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
    const videoPlayer = ref("");

    function playVideo() {
      const hls = new Hls();
      hls.loadSource(streamUrl.value);
      hls.attachMedia(videoPlayer.value);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }

    return { streamUrl, videoPlayer, playVideo };
  },
};
</script>

<style lang="scss" scoped>
//
</style>
