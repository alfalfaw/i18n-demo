<template>
  <div id="app">
    <hello-i18n />
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n";
export default {
  name: "App",
  components: {
    HelloI18n,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
