<template>
    <div class="image">
        <img alt="Vue Pet" src="../assets/vue-dog.jpg">
        <h2>Bem vindo ao Vue Pet Clinic</h2>
        <h4>A maneira mais fácil e reativa de cadastrar seus pets!</h4>
        <div class="container">{{msg}}</div>
    </div> 
</template>

<script>
export default {
    name: 'CardBoasVindas',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>