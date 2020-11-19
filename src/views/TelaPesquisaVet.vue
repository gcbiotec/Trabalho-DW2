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

    <div :key="veterinario.id" v-for="veterinario in listaVeterinarios">
      <div class="card bg-light border-primary">
        <div class="row">
          <div class="col-2">
            <label>Nome:</label>
            {{ veterinario.nome }}
          </div>
          <div class="col-2">
            <label>CPF:</label>
            {{ veterinario.cpf }}
          </div>
          <div class="col-1">
            <label>Idade:</label>
            {{ calcularIdade(veterinario.dataNascimento) }}
          </div>

          <div class="col-1">
            <a href="#" @click="editarVeterinario(veterinario.id)">Editar</a>
          </div>
          <div class="col-1">
          <button @click="carregarCachorrosVeterinario(veterinario.id)">
            Ver Pacientes!
          </button>
          </div>

          <div class="col-3" >
           <ul>
            <li id="listaCachorros"
                v-for="cachorro in filtrarCachorroVeterinario(veterinario.id)"
                :key="cachorro.id"
              >
                {{ cachorro.nome }}
            </li>
           </ul> 
         </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardBoasVindas from "@/components/CardBoasVindas.vue";
import moment from "moment";

export default {
  data() {
    return {
      veterinario: {},
      listaVeterinarios: [],
      cachorrosDoVeterinario: [],
    };
  },
  name: "TelaPesquisaVet",
  components: {
    CardBoasVindas,
  },

  mounted() {
    fetch("http://localhost:8080/veterinarios", {
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

  methods: {
    calcularIdade(dataNasc) {
      return moment().diff(moment(dataNasc), "years");
    },
    filtrarCachorroVeterinario(id) {
      let associacaoVetCachorro = this.cachorrosDoVeterinario.filter(
        (associacao) => {
          return associacao.id === id;
        }
      );
      if (associacaoVetCachorro.length > 0)
        return associacaoVetCachorro[0].cachorros;
      else return [];
    },
    editarVeterinario(id) {
      this.$router.push(`/telaeditarVet/${id}`);
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

    carregarCachorrosVeterinario(id) {
      fetch(`http://localhost:8080/veterinarios/${id}/cachorros`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((cachorrosDoVeterinario) => {
          let associacaoVetCachorro = {
            id: id,
            cachorros: cachorrosDoVeterinario,
          };
          this.cachorrosDoVeterinario.push(associacaoVetCachorro);
        });
    },
  },
};
</script>

<style>
.card {
  margin: 10px;
}
#listaCachorros {
  display: flex;
}
</style>