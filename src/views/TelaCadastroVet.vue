<template>
  <div>
    <div class="card">
      <div class="card-body">
        <card-boas-vindas msg="Aqui você pode cadastrar um novo veterinário" />
      </div>
    </div>
    <div class="container">
      <input
        class="form-control"
        type="text"
        maxlength="100"
        v-model="veterinario.nome"
        placeholder="Qual é o nome do veterinário?"
      />
    </div>
    <div class="container">
      <input
        class="form-control"
        type="number"
        maxlength="11"
        v-model="veterinario.cpf"
        placeholder="Qual é o CPF do veterinário?"
      />
    </div>
    <div class="container">
      <input
        class="form-control"
        type="text"
        maxlength="100"
        v-model="veterinario.dataNasc"
        placeholder="Qual é a data de nascimento do veterinário?"
      />
    </div>
    <div id="botao" class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <button type="button" class="btn btn-primary" @click="salvar()">
            Salvar
          </button>
          <div>
            <span v-if="mensagemErro != ' '">{{ mensagemErro }}</span>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardBoasVindas from "@/components/CardBoasVindas.vue";

export default {
  name: "TelaCadastroVet",
  components: {
    CardBoasVindas,
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

      fetch("http://localhost:8080/veterinarios", {
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
  data() {
    return {
      veterinario: {},
      listaVeterinarios: [],
    };
  },
};
</script>