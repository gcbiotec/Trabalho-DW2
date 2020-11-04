<template>
  <div>
    <div class="card">
      <card-boas-vindas
        titulo="Aqui você pode cadastrar um novo veterinário!"
      />
    </div>

    <input
      class="form-control"
      type="text"
      maxlength="100"
      v-model="veterinario.nome"
      placeholder="Qual é o nome do veterinário?"
    />

    <div class="row">
      <div class="col-6">
        <div id="campoCPF" class="container">
          Qual o seu CPF?
          <the-mask
            :mask="['###.###.###-##', '##.###.###/####-##']"
            v-model="veterinario.cpf"
          />
        </div>
      </div>

      <div class="col-6">
        <span class="demonstration">Data de Nascimento</span>
        <el-date-picker
          v-model="veterinario.dataNasc"
          type="date"
          placeholder="Escolha a data"
        >
        </el-date-picker>
      </div>
    </div>

    <div id="botao" class="container">
      <div class="row">
        <div class="col-4">
          <button type="button" class="btn btn-primary" @click="salvar()">
            Salvar
          </button>
          <div>
            <span v-if="mensagemErro != ' '">{{ mensagemErro }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
      let parametroId = " ";
      let metodoHTTP;

      if (this.$route.params.id != undefined) {
        metodoHTTP = "POST";
        parametroId = this.$route.params.id;
      } else {
        metodoHTTP = "PATCH";
      }
-->

<script>
import CardBoasVindas from "@/components/CardBoasVindas.vue";
import moment from "moment";

export default {
  data() {
    return {
      veterinario: {
        idade: moment('YYYY-MM-DD').diff(moment(this.dataNasc), "years"),
      },
      listaVeterinarios: [],
    };
  },
  name: "TelaCadastroVet",
  components: {
    CardBoasVindas,
  },

  mounted() {
    fetch(`http://localhost:8080/veterinarios`, {
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
    dadosValidos() {
      if (
        this.veterinario.nome == undefined ||
        this.veterinario.nome == "" ||
        this.veterinario.cpf == undefined ||
        this.veterinario.cpf == "" ||
        this.veterinario.dataNasc == undefined ||
        this.veterinario.dataNasc == ""
      ) {
        return false;
      }
      return true;
    },
    salvar() {
      if (!this.dadosValidos()) {
        this.mensagemErro = "Você deve preencher o dado faltante!";
        return;
      }
      fetch("http://localhost:8080/veterinarios/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.veterinario),
      }).then((response) => {
        if (response.ok) {
          alert("O veterinário foi cadastrado!"), this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
.container {
  padding: 10px;
}
</style>