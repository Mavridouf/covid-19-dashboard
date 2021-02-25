<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 44%;
  background: #ffffff;
  box-shadow: 0px 6px 12px rgb(0 0 0 / 12%);
  border-radius: 12px;
  padding: 30px 25px;
  margin: 0px 5px 20px 5px;
}

@media screen and (max-width: 1439px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}

@media screen and (max-width: 426px) {
  .card {
    padding: 20px 0px 5px 0px;
    margin: 0px 0px 20px 0px;
  }
}
</style>
