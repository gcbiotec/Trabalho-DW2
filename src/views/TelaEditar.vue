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

    <div id="escolhaRaca" class="col-3">
      <label>Escolha a raça do seu dog!</label>

      <select input v-model="cachorro.raca" class="dropdown">
        <option value="Beagle">Beagle</option>
        <option value="Rottweiler">Rottweiler</option>
        <option value="Poodle">Poodle</option>
        <option value="Pastor Alemão">Pastor Alemão</option>
        <option value="Bulldog">Bulldog</option>
        <option value="Labrador">Labrador</option>
        <option value="Husky">Husky</option>
        <option value="Chihuahua">Chihuahua</option>
        <option value="Dobermann">Dobermann</option>
        <option value="Bull Terrier">Bull Terrier</option>
      </select>
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

    <div id="campoVet" class="col-3">
      <label>Escolha o veterinário responsável:</label>
      <select v-model="cachorro.veterinario_id">
        <option
          :key="veterinarioResponsavel.id"
          v-for="veterinarioResponsavel in listaVeterinarios"
          :value="veterinarioResponsavel.id"
        >
          {{ veterinarioResponsavel.nome }}
        </option>
      </select>
    </div>

    <div class="row">
      <div type="button" class="btn btn-primary" @click="salvar()">
        Salvar Mudanças
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachorro: {},
      listaVeterinarios: [],
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
      }),
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

        let idCachorro = this.$route.params.id;
        let identificacaoDoVeterinario = this.cachorro.veterinario_id

          fetch(`http://localhost:8080/cachorros/` + idCachorro, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({veterinarioId:identificacaoDoVeterinario}),
          }).then((response) => {
            if (response.ok) {
              alert("Seu dog foi editado com sucesso!"), this.$router.push("/");
            }
          });
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