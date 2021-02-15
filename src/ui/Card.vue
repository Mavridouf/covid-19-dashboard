<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 480px;
  height: 320px;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgb(0 0 0 / 12%);
  border-radius: 12px;
  padding: 30px 25px;
  margin: 0px 5px 20px 5px;
}
</style>
