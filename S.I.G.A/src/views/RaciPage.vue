<template>
<div class="raci-page">
    <div class="container">
        <div class="icone">
            <img src="../assets/image/1x/Ativo 1.png" class="logo">
            <h2>Acesso dos Alunos</h2>
        </div>

        <div class="tabela">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Data</th>
                    <th>Acesso</th>
                </tr>
                <tr v-for="(student, i) in this.students" :key="i">
                    <td>{{student.user[0].name}}</td>
                    <td>{{student.user[0].course}}</td>
                    <td>{{student.date}}</td>
                    <td>{{student.isinside==true?"entrada":"saida"}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
  
</template>

<script>
import axios from "../services/api"

export default {
    name: 'RaciPage',
    data(){
        return{
            students:[]
        }
    },
    methods:{
        async getStudents(){
            const response = await axios.get("/raci/access")
            this.students = response.data.access
            console.log(this.students)
        }, 
        async deleteStudent(id){
            await axios.delete(`/raci/${id}`)
            this.getStudents()
        }
    },
    mounted(){
        this.getStudents()
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
}

.raci-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #08090B;

}

.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    background-color: #242424;
    border-radius: 20px;

}

.icone{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;

    width: 100%;

    border-radius: 20px 20px 0 0;

    color: #fff;
    background-color: #242424;
}
h2{
    padding-left: 20px;
}

.logo{
    width: 50px;  
    height: 50px; 
}


.tabela{
    background-color: #fff;
    border-radius: 20px ;
    padding: 30px;
    width: 100%;           
    height: 500px;
    box-sizing: border-box;  
}

.container .tabela table{
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

th{
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

.btn-remover{
    width: 100%;
    height: 30px;
    border: none;
    background-color: #546F50;
    color: white;
    border-radius: 20px;
}
.btn-remover:hover{
    transition: 0.2s;
    background-color: #EA5058;
    color: #08090B;
    cursor: pointer;

}

.adicionar{
    padding: 30px;
    display: flex;
    justify-content: right;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
}

.btn-adicionar{
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition:  0.35s ease;
}

.img-adicionar{
    width: 40px;  
    height: 40px; 
}

.btn-adicionar :hover{
    transition: 0.2s;
    transform: scale(1.2);
}
</style>