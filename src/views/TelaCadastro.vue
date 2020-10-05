<template>
  <div>
    <img alt="Vue Pet" src="../assets/vue-dog.jpg" />

    <h2>Cadastro do Pet</h2>
    <h4>Cadastre os dados do seu pet!</h4>

    <form class="needs-validation" novalidate>
      <div id="campoNome" class="container">
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
        <div id="escolhaRaca" class="col-4">
          <label>Escolha a raça do seu dog!</label>
        
        <select input v-model="cachorro.raca" class="dropdown">
          <option value="Beagle">Beagle</option>
          <option value="Rottweiler">Rottweiler</option>
          <option value="Poodle">Poodle</option>
        </select>
      </div>

        <div class="col-4">
          <form>
            <label id="escolhaPeso" for="formControlPeso">Escolha o peso:</label>
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

        <div class="col-4">
          <form>
            <label id="escolhaIdade" for="formControlIdade">Escolha a idade:</label>
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
  
    <div id="botao" class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
        <button type="button" class="btn btn-primary" @click="salvar()">
          Salvar
        </button>
        <div>
      <span v-if="mensagemErro != ' ' ">{{mensagemErro}}</span>
    </div>
        <div class="col-4"></div>
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
      mensagemErro: "",
    };
  },
  methods: {
    dadosValidos(){
      if(this.cachorro.nome == undefined || this.cachorro.nome == ""){
        return false;
      }
      return true;
    },
    salvar() {
      if(!this.dadosValidos()){
        this.mensagemErro = "Você deve preencher o nome do seu cachorro!";
        return;
      }

      fetch("http://localhost:8080/cachorros", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.cachorro),
      }).then((response) => {
        if (response.ok) {
          alert("Seu dog foi cadastrado!"), this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
#campoNome {
  width: 80%;
  padding: 20pt;
}
#botao{
  align-content: bottom;
  padding-top: 40pt;
}
#escolhaRaca{
  display: flex;
  flex-direction: column;
}
#escolhaPeso{
display: flex;
flex-direction: column;
}
#escolhaIdade{
display: flex;
flex-direction: column;
}

</style>