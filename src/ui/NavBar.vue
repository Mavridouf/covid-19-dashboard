<template>
  <div class="navbar">
    <nav>
      <div class="linkWrapper">
        <router-link to="/daily" active-class="linkActive" class="link"
          >Daily</router-link
        >
      </div>
      <div class="linkWrapper">
        <router-link to="/overview" active-class="linkActive" class="link"
          >Overview</router-link
        >
      </div>
      <div class="linkWrapper">
        <router-link to="/gender" active-class="linkActive" class="link"
          >Gender</router-link
        >
      </div>
      <div class="linkWrapper">
        <router-link to="/about" active-class="linkActive" class="link"
          >About</router-link
        >
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/styles.scss";

.navbar {
  display: block;
  padding-bottom: 16px;
}

.linkWrapper {
  display: inline-block;
  margin-right: 42px;
}

.link {
  cursor: pointer;
  color: $black;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 8px;
  text-decoration: none;
  position: relative;
}

.link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  background: $primary;
  transition: width 0.2s ease 0s, left 0.2s;
  width: 0;
}

.link:hover:after {
  width: 100%;
  left: 0%;
  border-radius: 12px;
}

.linkActive {
  color: $primary;
  font-weight: 700;
}

.linkActive:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  position: absolute;
  background: $primary;
  width: 100%;
  left: 0%;
  border-radius: 12px;
}
</style>
