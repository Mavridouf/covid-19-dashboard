<template>
  <div class="header">
    <h2>Covid-19 Dashboard</h2>
    <div class="circle"></div>
  </div>
  <div class="mainBody">
    <div class="main-container">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./ui/NavBar";

export default {
  components: {
    "nav-bar": NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Ubuntu:wght@700&display=swap");
@import "./styles/styles.scss";

html,
body {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: "Roboto", "Ubuntu", sans-serif;
  font-size: 14px;
  color: $black;
  margin: 0;
  background: #4f4f4f;
}

::-webkit-scrollbar {
  border-radius: 12px;
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 12px 12px 0 0;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 12px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#app {
  height: 100%;
  flex-direction: column;
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $creme;

  h2 {
    margin-left: 46px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    letter-spacing: 0.15em;
  }

  .circle {
    width: 38px;
    height: 38px;
    margin-right: 46px;
    background: $creme;
    border-radius: 50%;
  }
}

.mainBody {
  flex: 1;
  background: $creme;
  border-radius: 12px 12px 0 0;
  padding: 46px;
  .main-container {
    width: 92%;
    margin: auto;
  }
}
</style>
