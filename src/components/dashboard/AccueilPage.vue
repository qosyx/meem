<template>
    <div class="main">
        <SideBar class="sidebar"/>
        <div class="content">
        <HeaderPage class="header"/>
         <main class="main-content">
        <div class="filters">
            <button class="filter-button active">TOUT AFFICHER</button>
            <button class="filter-button">DEMANDE D’AUTORISATION</button>
            <button class="filter-button">REDEVANCE D’EXPLOITATION</button>
            <button class="filter-button">FILTRER</button>
        </div>
        <table class="requests-table">
            <thead>
                <tr>
                    <th>STATUT</th>
                    <th>ID E-DEMANDE</th>
                    <th>TITRE DE LA DEMANDE</th>
                    <th>DATE DE DEMANDE</th>
                    <th>DATE DE MISE À JOUR</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <!-- Exemple de ligne de demande -->
                <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>
                   <tr>
                    <td><span class="status">EN COURS</span></td>
                    <td>PS01317-230609-K29R9V</td>
                    <td>REDEVANCE D’EXPLOITATION</td>
                    <td>21-03-2022</td>
                    <td>23-03-2022</td>
                    <td><button class="details-button">Voir les détails</button></td>
                </tr>

                <!-- Répétez les lignes selon les données -->
            </tbody>
        </table>
    </main>
        </div>
    </div>
</template>

<script setup>
import HeaderPage from "./HeaderPage.vue"
import SideBar from "./SidebarPage.vue"
</script>

<style scoped>

.main-content {
    padding: 20px;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.filter-button.active {
    background-color: #1E2A78;
    color: white;
}

.requests-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
}

.requests-table th, .requests-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

.requests-table th {
    background-color: #f9f9f9;
    font-weight: bold;
}

.status {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    font-size: 12px;
    font-weight: bold;
}

.details-button {
    padding: 10px 20px;
    background-color: #1E2A78;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.details-button:hover {
    background-color: #162066;
}
.main-page{
background-color: #E9EFF4;
height: 500px

}
.content{
    display: grid;
    grid-template-rows: 1.3fr 7fr;
    
}
.main{
    display:grid;
    grid-template-columns: 1fr 5fr;
    }

.sidebar{
     position: sticky;
}
.header{
    position: sticky; 
}
</style>