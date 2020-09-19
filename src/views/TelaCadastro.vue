<template>
  <div>
    <img
      alt="Vue logo"
      src="http://ead.fundatec.org.br/moodle/pluginfile.php/72296/mod_resource/content/1/vue-dog.jpg"
    />
    <h2>Cadastro do Pet</h2>
    <h4>Cadastre os dados do seu pet!</h4>

    <form>
      <div class="container campoNome">
        <label for="InserirNome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="InserirNome"
          placeholder="Qual é o nome do seu pet?"
        />
      </div>
    </form>

    <div class="container">
      <div class="row">
        <div class="col-6">
          <select class="dropdown">
            <option selected>Escolha o tipo do seu pet!</option>
            <option value="1">Cachorro</option>
            <option value="2">Gato</option>
          </select>
        </div>
        <div class="col-6">
          <select class="dropdown">
            <option selected>Escolha a raça do seu pet!</option>
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
            <input type="number" value="1" min="1" max="100" step="1" />
          </form>
        </div>

        <div class="col-6">
          <form>
            <label for="formControlIdade">Escolha a idade do pet:</label>
            <input type="number" value="1" min="1" max="30" step="1" />
          </form>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-primary">Salvar</button>
  </div>
</template>

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