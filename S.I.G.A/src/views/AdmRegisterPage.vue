<template>
    <div class="adm-register">
    <section>
      <div class="div-left">
        <form @submit.prevent="handleSubmit">
          <div class="div-register">
            <h1>Cadastrar</h1>
          </div>

          <div class="div-input">
            <ul>
                <button class="btn" type="button" :class="{active: this.formData.role==='GESTAO'?true:false}" @click="this.formData.role = 'GESTAO'">GESTÃO</button>
                <button class="btn" type="button" :class="{active: this.formData.role==='DEGP'?true:false}" @click="this.formData.role = 'DEGP'">DEGP</button>
                <button class="btn" type="button" :class="{active: this.formData.role==='RACI'?true:false}" @click="this.formData.role = 'RACI'">RACI</button>
            </ul>

                <input type="text" placeholder="Usuário" v-model="this.formData.username" required>
                <input type="text" placeholder="Nome completo" v-model="this.formData.name" required>
                <input type="text" placeholder="CPF" v-model="this.formData.cpf" required>
                <input type="password" placeholder="Senha" v-model="this.formData.password" required>
        
                <button type="submit" name="botao" id="botao" class="botao" @click="register()">Cadastrar</button>
            </div>
        </form>
      </div>

      <div class="div-right">
        <img src="../assets/image/fundo2.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import axios from '../services/api';
export default {
  name: 'AdmRegisterPage',
  data(){
    return{
        formData:{
            username : "",
            name: "",
            cpf: "",
            password: "",
            role: ""
        },
        managerActive: false,
        degpActive: false,
        raciActive: false
    }
  },
  methods:{ 
    async register(){
        await axios.post('/adm', this.formData);
    }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
}

.adm-register{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #08090B;

}

section{
    display: flex;
    flex-direction: row;
    position: absolute; 
    background-color: transparent;
}
.div-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #242424;
    padding:50px;
}

.div-cadastro{
    display: flex;
    flex-direction: column;
    width: 100%;
}

h1{
    position: relative;
    padding: 20px 0px;
}

h1::before{ 
    content: " ";
    position: absolute;
    height: 6px;
    bottom: -3px;
    width: 0%; 
    transition: width 0.3s ease; 
    border-radius: 25px;
    background: #546F50;
}

section:hover h1::before{ 
    width: 100%;
}

.div-input{
    display: flex;
    flex-direction: column;
}

input{
    background-color: transparent;
    padding: 20px;
    padding-right: 100px;
    border: none;
    border: 2px solid #08090B;
    color: #fff; 
    border-radius:5px ;
    margin: 10px 0; 
    outline: none; 

    font-size: 18px;
}

ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    width: 100%;
    height: 100%;
    margin-top: 10px;
    padding: 20px;

    color: #fff;
    border: 2px solid #08090B;
    background-color: #242424;
    border-radius: 4px;
}

.btn{
    border: none;
    background-color: #546F50;
    border-radius: 4px;
    width: 80px;
    padding: 10px;
    font-size: 15px;
}

.btn.active{
    background-color: #EA5058;
}
.btn:hover{
    background-color: #d0666b;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.botao{
    border: none;
    background-color: #546F50;
    border-radius: 4px;
    padding: 15px;
    width: 100%;
    margin: 10px 0 0px 0px;
    font-size: 20px;
}

.botao a{
    color: #fff;
}

.botao:hover{
    background-color: #EA5058;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.botao:hover a{
    color: #fff;
}
</style>