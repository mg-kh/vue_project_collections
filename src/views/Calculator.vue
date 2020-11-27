<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="about">
          <h1 class="text-center mb-3">Calculate Here</h1>
          <div class="calculator__container">
            <div class="answer">
              {{ currentNumber }}
            </div>
            <small v-if="operator"
              >{{ previousNumber }}{{ operator }}{{ currentNumber }}</small
            >
            <div class="key__container">
              <button @click="pressBtn('1')">1</button>
              <button @click="pressBtn('2')">2</button>
              <button @click="pressBtn('3')">3</button>
              <button @click="pressBtn('+')">+</button>
              <button @click="pressBtn('4')">4</button>
              <button @click="pressBtn('5')">5</button>
              <button @click="pressBtn('6')">6</button>
              <button @click="pressBtn('-')">-</button>
              <button @click="pressBtn('7')">7</button>
              <button @click="pressBtn('8')">8</button>
              <button @click="pressBtn('9')">9</button>
              <button @click="pressBtn('*')">*</button>
              <button @click="pressBtn('c')">C</button>
              <button @click="pressBtn('0')">0</button>
              <button @click="pressBtn('/')">/</button>
              <button @click="pressBtn('=')">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const currentNumber = ref("");
    const operators = ["+", "-", "*", "/"];
    const keyPressCollections = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "c",
      "+",
      "-",
      "*",
      "/",
      "=",
      "Enter",
      "Escape",
      "Delete",
    ];
    const previousNumber = ref("");
    const operator = ref("");

    function pressBtn(value) {
      if (value === "=" || value === "Enter") solve();
      else if (value === "c" || value === "Escape" || value === "Delete")
        clear();
      else if (operators.includes(value)) operate(value);
      else append(value);
    }

    function solve() {
      if (operator.value === "+") plus();
      else if (operator.value === "-") minus();
      else if (operator.value === "*") multiply();
      else if (operator.value === "/") divide();

      previousNumber.value = "";
      operator.value = "";
    }

    function plus() {
      currentNumber.value =
        Number(previousNumber.value) + Number(currentNumber.value);
    }

    function minus() {
      currentNumber.value =
        Number(previousNumber.value) - Number(currentNumber.value);
    }

    function multiply() {
      currentNumber.value =
        Number(previousNumber.value) * Number(currentNumber.value);
    }

    function divide() {
      currentNumber.value =
        Number(previousNumber.value) / Number(currentNumber.value);
    }

    function operate(value) {
      previousNumber.value = currentNumber.value;
      currentNumber.value = "";
      operator.value = value;
    }

    function append(value) {
      currentNumber.value = currentNumber.value + value;
    }

    function clear() {
      currentNumber.value = "";
    }

    function handleKeyDown(e) {
      if (keyPressCollections.includes(e.key)) pressBtn(e.key);
    }
    onMounted(() => window.addEventListener("keydown", handleKeyDown));

    onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));

    return { currentNumber, pressBtn, previousNumber, operator };
  },
};
</script>

<style lang="scss" scoped>
.calculator__container {
  max-width: 300px;
  margin: auto;
  border: 1px solid rgb(214, 214, 214);
  padding: 0.5rem;
  border-radius: 0.5rem;
  .answer {
    margin-bottom: 1rem;
    background-color: rgb(219, 219, 219);
    font-size: 30px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    font-style: italic;
    overflow-x: auto;
    direction: rtl;
    padding: 40px auto;
    box-sizing: border-box;
  }
  .key__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    button {
      padding: 1rem;
      margin: 0.5rem;
      border: none;
      box-shadow: 1px 1px 1px 1px grey;
      border-radius: 0.5rem;
    }
  }
}
</style>
