<template>
<div>
  <div class="card">
   <div class="card-body"><card-boas-vindas/></div>
  </div>
  
  <div id="Pesquisa">
   <button @click="IrParaPesquisa" type="button" class="btn btn-outline-primary"><card-pesquisa/></button>
  </div>

  <div id="Cadastro">  
   <button @click="IrParaCadastro" type="button" class="btn btn-outline-success"><card-cadastro/></button>
  </div>
</div> 
</template>

<script>
// @ is an alias to /src
import CardBoasVindas from '@/components/CardBoasVindas.vue'
import CardCadastro from '@/components/CardCadastro.vue'
import CardPesquisa from '@/components/CardPesquisa.vue'


export default {
  name: 'Home',
  components: {
    CardBoasVindas,
    CardCadastro,
    CardPesquisa,
  
  },
  methods:{
    IrParaPesquisa(){
      this.$router.push({path: "/TelaPesquisa"});
    },
    IrParaCadastro(){
      this.$router.push({path: "/TelaCadastro"});
    },
  },
}
</script>
