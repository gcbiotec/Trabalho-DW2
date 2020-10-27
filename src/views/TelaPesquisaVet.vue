<template>
  <div>
    <div class="card">
      <div class="card-body">
        <card-boas-vindas titulo="Aqui você pode pesquisar um veterinário!" />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="PesquisaPorNome">
          <input
            v-model="veterinario.nome"
            type="text"
            class="form-control"
            placeholder="Faça uma pesquisa por nome do veterinário!"
          />
        </div>
      </div>
      <div class="row-flex">
        <button
          id="pesquisar"
          class="btn btn-primary"
          @click="pesquisar(veterinario.nome)"
        >
          Pesquisar
        </button>
      </div>
    </div>

    <div
      class="user"
      :key="veterinario.id"
      v-for="veterinario in listaVeterinarios"
    >
      <div class="row">
        <div class="col-2">
          <label>Nome:</label>
          {{ veterinario.nome }}
        </div>
        <div class="col-2">
          <label>CPF:</label>
          {{ veterinario.cpf }}
        </div>
        <div class="col-2">
          <label>Idade:</label>
          {{ veterinario.idade }}
        </div>

        <div class="col-4">
          <a href="#" @click="editarVeterinario(veterinario.id)">Editar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardBoasVindas from "@/components/CardBoasVindas.vue";

export default {
  data() {
    return {
      veterinario: {},
      listaVeterinarios: [],
    };
  },
  name: "TelaPesquisaVet",
  components: {
    CardBoasVindas,
  },
  methods: {
    editarVeterinario(id) {
      this.$router.push(`/telacadastroVet/${id}`);
    },
    pesquisar(nome) {
      fetch(`http://localhost:8080/veterinarios?nome=${nome}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((veterinarioJSON) => {
          this.listaVeterinarios = veterinarioJSON;
        });
    },
  },
};
</script>