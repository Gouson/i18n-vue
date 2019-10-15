<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Test level="2000" :dataArray="dataArray"></Test>

    <Test level="2000" :dataArray="dataArray"></Test>

    <Test level="2000" :dataArray="dataArray"></Test>
    <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" id="catIframe" frameborder="0"></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import Test from "@/components/test.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Test
  },
  data() {
    return {
      dataArray: [83, 117, 5, 30, 121, 45]
    };
  }
};
</script>
