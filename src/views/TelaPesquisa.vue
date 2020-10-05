<template>
  <div>
    <img alt="Vue logo" src="../assets/vue-dog.jpg" />
    <h2>Pesquisa de Pet!</h2>
    <h4>Encontre seu pet abaixo!</h4>
    <!--  -->
  
  <div class="container">
    <div class="row">
      <div id="PesquisaPorNome" class="form-group">
        
        <input
          v-model="cachorro.nome"
          type="text"
          class="form-control"
          placeholder="Faça uma pesquisa por nome do pet!"
        />
      </div>
     </div> 
      <div class="row"> 
        <button id="pesquisar" class="btn btn-primary" @click="pesquisar(cachorro.nome)">
          Pesquisar
        </button>
      </div>
   </div> 
     
  
    <div class="user" :key="cachorro.id" v-for="cachorro in listaCachorros">
      <div class="row">
        <div class="col-2">{{ cachorro.nome }}</div>
        <div class="col-2">{{ cachorro.idade }}</div>
        <div class="col-2">{{ cachorro.peso }}</div>
        <div class="col-2">{{ cachorro.raca }}</div>
        <div class="col-4">
          <a href="#" @click="editarCachorro(cachorro.id)">Editar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachorro: {},
      listaCachorros: [],
    };
  },

  mounted() {
    fetch("http://localhost:8080/cachorros", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((cachorroJSON) => {
        this.listaCachorros = cachorroJSON;
      });
  },

  methods: {
    editarCachorro(id) {
      this.$router.push(`/telaeditar/${id}`);
    },

    pesquisar(nome) {
      fetch(`http://localhost:8080/cachorros?nome=${nome}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((cachorroJSON) => {
          this.listaCachorros = cachorroJSON;
        });
    },
  },
};
</script>

<style>
.user {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.PesquisaPorNome {
  width: 5pt;
}
.pesquisar {
  border: 200px;
}
.row{
  width: 80%;
}
</style>