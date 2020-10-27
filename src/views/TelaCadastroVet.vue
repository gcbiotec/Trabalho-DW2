<template>
  <div>
    <div class="card">
      <div class="card-body">
        <card-boas-vindas
          titulo="Aqui você pode cadastrar um novo veterinário!"
        />
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
      <div class="row">
        <div class="col-4">
          <div id="campoCPF" class="container">
            Qual o seu CPF?
              <the-mask
                :mask="['###.###.###-##', '##.###.###/####-##']"
                v-model="veterinario.cpf"
              />
            </div>
        </div>

        <div class="col-4">
          {{ this.dataAtual }}
        </div>

        <div class="col-4">
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
          <div class="col-4"></div>
          <div class="col-4">
            <button type="button" class="btn btn-primary" @click="salvar()">
              Salvar
            </button>
            <div>
              <!-- <span v-if="mensagemErro != ' '">{{ mensagemErro }}</span> -->
            </div>
            <div class="col-4"></div>
          </div>
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

      let parametroId = " ";
      let metodoHTTP;
      if (this.$route.params.id != undefined) {
        metodoHTTP = "PUT";
        parametroId = this.$route.params.id;
      } else {
        metodoHTTP = "POST";
      }

      fetch("http://localhost:8080/veterinarios/" + parametroId, {
        method: metodoHTTP,
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
      dataAtual: new Date(),
    };
  },
};
</script>

<style>
.container {
  padding: 10px;
}
</style>