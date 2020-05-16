<template>
  <div id="app">
    <Progress />
    <Clock :target="new Date(2020, 8, 17)" />
  </div>
</template>

<script>
import Progress from "./components/Progress";
import Clock from "./components/Clock";

export default {
  name: "App",
  components: { Progress, Clock }
};
</script>

<style lang="less">
@font-face {
  font-family: "BlenderPro";
  font-weight: normal;
  src: url(https://cyberpunk.gog-statics.com/fonts/BlenderPro-Book.woff2)
    format("woff2");
}
@font-face {
  font-family: "BlenderPro";
  font-weight: bold;
  src: url(https://cyberpunk.gog-statics.com/fonts/BlenderPro-Bold.woff2)
    format("woff2");
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-family: "BlenderPro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: right;
  // direction: rtl;

  * {
    box-sizing: border-box;
  }
}

.full {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
