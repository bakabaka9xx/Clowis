<template>
  <div :class="$style.page">
    <login-box />
  </div>
</template>

<script>
  import LoginBox from '../components/LoginBox.vue'

  export default {
    components: {
      LoginBox
    }
  }
</script>

<style module>
.page {
  background-color: #F0F0F0;
}
</style>
