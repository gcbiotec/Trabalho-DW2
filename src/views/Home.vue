<template>
  <div>
    <div class="card">
      <div class="card-body">
        <card-boas-vindas
          titulo="Bem vindo ao Vue Pet Clinic"
          subtitulo="A maneira mais fácil e reativa de cadastrar seus pets!"
        />
      </div>
    </div>
    <div class="row" id="Entidade">
      <div class="col-4"></div>
      <div id="Categoria" class="col-4"><b>Cachorros</b></div>
      <div class="col-4"></div>
    </div>
    <div class="row">
      <div class="col-3"></div>

      <div class="col-3" id="Pesquisa">
        <button
          @click="IrParaPesquisa"
          type="button"
          class="btn btn-outline-primary"
        >
          <card-pesquisa
            titulo="Pesquisa de Cachorros"
            subtitulo="Clique aqui para pesquisar um cachorro já cadastrado"
          />
        </button>
      </div>

      <div class="col-3" id="Cadastro">
        <button
          @click="IrParaCadastro"
          type="button"
          class="btn btn-outline-success"
        >
          <card-cadastro
            titulo="Cadastro de Cachorros"
            subtitulo="Clique aqui para cadastrar um cachorro!"
          />
        </button>
      </div>

      <div class="col-3"></div>
    </div>

    <div id="entidade" class="row">
      <div class="col-4"></div>
      <div id="Categoria" class="col-4"><b>Veterinários</b></div>
      <div class="col-4"></div>
    </div>
    <div class="row">
      <div class="col-3"></div>

      <div class="col-3" id="Pesquisa">
        <button
          @click="IrParaPesquisaVet"
          type="button"
          class="btn btn-outline-primary"
        >
          <card-pesquisa
            titulo="Pesquisa de Veterinários"
            subtitulo="Clique aqui para pesquisar um veterinário já cadastrado"
          />
        </button>
      </div>

      <div class="col-3" id="Cadastro">
        <button
          @click="IrParaCadastroVet"
          type="button"
          class="btn btn-outline-success"
        >
          <card-cadastro
            titulo="Cadastro de Veterinários"
            subtitulo="Clique aqui para cadastrar um veterinário!"
          />
        </button>
      </div>

      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardBoasVindas from "@/components/CardBoasVindas.vue";
import CardCadastro from "@/components/CardCadastro.vue";
import CardPesquisa from "@/components/CardPesquisa.vue";

export default {
  name: "Home",
  components: {
    CardBoasVindas,
    CardCadastro,
    CardPesquisa,
  },
  methods: {
    IrParaPesquisa() {
      this.$router.push({ path: "/TelaPesquisa" });
    },
    IrParaCadastro() {
      this.$router.push({ path: "/TelaCadastro" });
    },
    IrParaPesquisaVet() {
      this.$router.push({ path: "/TelaPesquisaVet" });
    },
    IrParaCadastroVet() {
      this.$router.push({ path: "/TelaCadastroVet" });
    },
  },
};
</script>
<style>
.Pesquisa {
  align-content: left;
  width: 250px;
}
.Cadastro {
  align-content: right;
  width: 250px;
}
.Entidade {
  padding: 200px;
}
#Categoria {
  font-size: 50px;
  color: green;
}
</style>