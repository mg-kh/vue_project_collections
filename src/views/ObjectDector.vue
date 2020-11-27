<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body text-center">
            <h1 class="text-center mb-3">Object Dector</h1>
            <h3 v-if="prediction" class="text-danger">"{{ prediction }}"</h3>
            <input
              type="file"
              @change="uploadPhoto"
              class="form-control mb-4 border-0"
            />
            <span v-if="isStreaming">
              <button @click="takePhoto" class="btn btn-info">
                Take Photo
              </button>
              <button @click="closeCamera" class="btn btn-danger">
                Close Camera
              </button>
            </span>
            <button v-else @click="openCamera" class="btn btn-info mr-3">
              Open Camera
            </button>
            <button @click="detectObject" class="btn btn-success">
              <span v-if="isDetecting">Detecting...</span>
              <span v-else>Detect Object</span>
            </button>
            <hr />
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="card m-auto">
                  <img
                    src="https://images.unsplash.com/photo-1580910051074-3eb694886505"
                    ref="imageRef"
                    class="w-100 h-100"
                    crossorigin="anonymous"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <video
                      width="200"
                      height="200"
                      ref="videoRef"
                      autoplay
                      class="m-auto"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { log } from "@tensorflow/tfjs-core";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const videoRef = ref("");
    const imageRef = ref("");
    const prediction = ref(null);
    const isDetecting = ref(false);
    const isStreaming = ref(false);

    async function openCamera() {
      videoRef.value.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      isStreaming.value = true;
    }

    function closeCamera() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      isStreaming.value = false;
    }

    function takePhoto() {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.value.width;
      canvas.height = videoRef.value.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        videoRef.value,
        0,
        0,
        videoRef.value.width,
        videoRef.value.height
      );
      const getImage = canvas.toDataURL("image/png");
      imageRef.value.setAttribute("src", getImage);
    }

    async function detectObject() {
      isDetecting.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(imageRef.value);
      prediction.value = predictions[0].class;
      isDetecting.value = false;
    }

    function uploadPhoto() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          imageRef.value.src = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    }

    return {
      videoRef,
      isStreaming,
      openCamera,
      closeCamera,
      takePhoto,
      imageRef,
      detectObject,
      prediction,
      isDetecting,
      uploadPhoto,
    };
  },
};
</script>

<style lang="scss" scoped>
// .container {
//   width: 400px;
//   margin: auto;
//   h3 {
//     color: red;
//     font-style: italic;
//   }
//   input {
//     display: block;
//     margin: auto;
//     margin-bottom: 1rem;
//   }
//   .image__container {
//     width: 200px;
//     height: 250px;
//     margin: 1rem auto;
//     video {
//       border: 1px solid grey;
//       border-radius: 0.5rem;
//       background-color: rgb(230, 230, 230);
//     }
//     img {
//       width: 200px;
//       height: 200px;
//       border-radius: 0.5rem;
//     }
//   }
//   button {
//     padding: 0.5rem;
//     margin: auto 0.5rem;
//     border: none;
//     box-shadow: 1px 1px 1px 1px grey;
//     cursor: pointer;
//     outline: none;
//     &:hover {
//       box-shadow: none;
//     }
//   }
// }
</style>
