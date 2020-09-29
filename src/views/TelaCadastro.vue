<template>
  <div>
    <img alt="Vue Pet" src="../assets/vue-dog.jpg" />

    <h2>Cadastro do Pet</h2>
    <h4>Cadastre os dados do seu pet!</h4>

    <form>
      <div id="campoNome" class="container">
        <label>Nome</label>
        <input
        id="validationDefault01"
          v-model="cachorro.nome"
          type="text"
          class="form-control"
          placeholder="Qual é o nome do seu pet?"
        />
      </div>
    </form>

    <div class="container">
      <div class="row">
        <label>Escolha a raça do seu dog!</label>
        <!--<div class="col-6">
          <select input v-model="cachorro.tipo" class="dropdown">
            <option selected>Escolha o tipo do seu pet!</option>
            <option value="1">Cachorro</option>
            <option value="2">Gato</option>
          </select>
        </div> -->
        <div class="col-6">
          <select input v-model="cachorro.raca" class="dropdown">
            <option value="1">Beagle</option>
            <option value="2">Rottweiler</option>
            <option value="3">Poodle</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-6">
          <form>
            <label for="formControlPeso">Escolha o peso do pet:</label>
            <input
            id="validationDefault02"
              v-model="cachorro.peso"
              type="number"
              value="1"
              min="1"
              max="100"
              step="1"
            />
          </form>
        </div>

        <div class="col-6">
          <form>
            <label for="formControlIdade">Escolha a idade do pet:</label>
            <input
            id="validationDefault03"
              v-model="cachorro.idade"
              type="number"
              value="1"
              min="1"
              max="30"
              step="1"
            />
          </form>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-primary" @click="salvar()">
      Salvar
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachorro: {},
    };
  },
  methods: {
    salvar() {
      fetch("http://localhost:8080/cachorros", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.cachorro),
      }).then((response) => {
        if (response.ok) {
          alert("Dados foram salvos!"), this.$router.push("/home");
        }
      });
    },
  },
};
</script>

<style scoped>
.col {
  display: flex;
  justify-content: flex-start;
  width: 70%;
}

.row {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin: 40px;
}

.campoNome {
  width: 70%;
}
</style>