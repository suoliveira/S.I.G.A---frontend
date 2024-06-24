<template>
   <div class="app">
    <section>
      <div class="div-left">
        <img src="../assets/image/1x/Ativo 2.png" width="200px">
        <form @submit.prevent="handleSubmit">
          <div class="div-login">
            <h1>LOGIN</h1>
          </div>

          <div class="div-input">
            <div class="input">
              <input type="text" placeholder="Usuário" v-model="username" required>
            </div>
            <div class="input">
              <input type="password" placeholder="Senha" v-model="password" required>
            </div>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>

      <div class="div-right">
        <img src="../assets/image/fundo3.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>

</style>