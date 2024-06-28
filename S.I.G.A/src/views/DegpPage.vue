<template>
<div class="degp-page">
    <NavBarComponent :links="navLinks"></NavBarComponent>
    <div class="container">
        <div class="icone">
            <img src="../assets/image/1x/Ativo 1.png" class="logo">
            <h2>Acesso dos Servidores</h2>
        </div>

        <div class="tabela">
            <table>
                <tr>
                    <th>Nome</th> 
                    <th>Data</th>
                    <th>Acesso</th>
                </tr>
                <tr v-for="(employee, i) in employees" :key="i">
                    <td>{{employee.user[0].name}}</td>
                    <td>{{employee.date}}</td>
                    <td>{{employee.isinside ? "entrada" : "saida"}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from "../services/api"
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
    name: 'DegpPage',
    components: {
        NavBarComponent
    },
    data() {
        return {
            employees: [],
            navLinks: [
                { text: 'Lista', to: "/listar-servidores" },
                { text: 'Cadastrar', to: "/registrar-degp" },
                { text: 'Acessos', to: "/degp" },
                { text: 'QrCode', to: "/acesso" }
            ]
        }
    },
    methods: {
        async getEmployees() {
            const response = await axios.get("/degp/access")
            this.employees = response.data.access
        }
    },
    mounted() {
        this.getEmployees()
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.degp-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #08090B;
}

.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    background-color: #242424;
    border-radius: 20px;
}

.icone {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: #fff;
    background-color: #242424;
}
h2 {
    padding-left: 20px;
}

.logo {
    width: 50px;  
    height: 50px; 
}

.tabela {
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    width: 100%;           
    height: 500px;
    box-sizing: border-box;  
}

.container .tabela table {
    width: 100%;
    height: 100;
    border-collapse: collapse;
}

.container table tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    background-color: #faf6f6;
}

th {
    background-color: #08090B;
    border: 1px solid #ccc;
    border-color: #fff;
    color: white;
}

.container table th, .container table td {
    flex: 1; 
    text-align: left; 
    padding: 8px; 
}
</style>
