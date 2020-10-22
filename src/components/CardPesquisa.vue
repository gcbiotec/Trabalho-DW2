<template>
    <div id="figuraLupa">
     <h3>{{titulo}}</h3>
     <h5>{{subtitulo}}</h5>   
    </div>
</template>

<script>
export default {
    name: 'CardPesquisa',
    props: {
    titulo: String,
    subtitulo: String,
  }
}
</script>

<style scoped>

</style>