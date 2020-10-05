<template>
  <div>
    <img alt="Vue Pet" src="../assets/vue-dog.jpg" />

    <h2>Editar dados do Pet</h2>
    <h4>Altere os dados do seu pet!</h4>

    <div class="row">
        <label>Identificação</label>
        <input type="text" class="form-control" readonly v-model="cachorro.id" />
    </div>

    <div class="row"> 
        <label>Nome</label>
        <input type="text" class="form-control" v-model="cachorro.nome" />
      </div>
  <!--    
    <div class="row">
        <label>Idade</label>
        <input type="text" class="form-control" v-model="cachorro.idade" />
      </div>

    <div class="row">
        <label>Peso</label>
        <input type="text" class="form-control" v-model="cachorro.peso" />
      </div>
  -->
    <div class="row">      
        <label>Raça</label>
        <input type="text" class="form-control" v-model="cachorro.raca" />
      
    </div>
   
    <div class="row">
      
      <div class="col-4">
        <form>
          <label for="formControlPeso">Escolha o peso do pet:</label>
          <input
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
          <label for="formControlIdade">Escolha a idade do pet:</label>
          <input
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
    
    <div class="row">
      <div type="button" class="btn btn-primary" @click="salvar()">Salvar Mudanças</div>
    </div>  
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachorro: {},
    };
  },
  mounted() {
    let idCachorro = this.$route.params.id;

    fetch(`http://localhost:8080/cachorros/${idCachorro}`, {
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
        this.cachorro = cachorroJSON;
      });
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
          alert("Dados foram alterados com sucesso!"),
            this.$router.push("/");
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