<template>
  <div>
    <img alt="Vue logo" src="../assets/vue-dog.jpg" />
    <h2>Pesquisa de Pet!</h2>
    <h4>Encontre seu pet abaixo!</h4>
    <!--  -->
    <form>
      <div class="form-group">
        <label for="PesquisaPorNome">Nome do pet</label>
        <input
          v-model="cachorro.nome"
          type="text"
          class="form-control"
          id="PesquisaPorNome"
          placeholder="Faça uma pesquisa por nome do pet!"
        />
        <button type="pesquisar" class="btn btn-primary" @click="pesquisar()">
          Pesquisar</button>
      </div>
    </form>

    
    <div class="user" :key="cachorro.id" v-for="cachorro in listaCachorros">
      <div class="row">
        <div class="col-2">{{ cachorro.nome }}</div>
        <div class="col-2">{{ cachorro.idade }}</div>
        <div class="col-2">{{ cachorro.peso }}</div>
        <div class="col-2">{{ cachorro.raca }}</div>
        <div class="col-4">
          <a href="#" @click="editarCachorro()">Editar</a>
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

  methods: {
    editarCachorro(id) {
      this.$router.push(`/telaeditar/${id}`);
    },
    pesquisar() {
      fetch("http://localhost:8080/cachorros/", {
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
</style>