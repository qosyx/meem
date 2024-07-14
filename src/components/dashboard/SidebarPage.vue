<template>
  <div>
    <div class="header-dasboard-banner">
      <img src="../../assets/img.svg" />
    </div>

    <div class="menu">
      <p class="text-menu">menu</p>
    </div>

    <div class="menu-list">
      <div class="services">
        <img src="../../assets/vector.svg" />
        <p>Services</p>
      </div>
      <div class="services-inactif">
        <img src="../../assets/user-mange.svg" />
        <p>Gestion des utilisateurs</p>
      </div>
      <div class="services-inactif stat">
        <img src="../../assets/stat.svg" />
        <p>Statistiques</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.menu-list{
    margin-top: -17px;
}
.stat {
  margin-top: -8px;
}
.services-inactif {
  display: flex;
  background-color: #ffffff;
  padding: 6px 0px 6px 30px;
  gap: 24px;
  opacity: 0px;
}
.services-inactif img {
  color: #1b4176;
}
.services-inactif p {
  color: #1b4176;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  text-align: left;
  text-transform: uppercase;
}
.services {
  display: flex;
  background-color: #1b4176;
  padding: 6px 0px 6px 30px;
  gap: 24px;
  opacity: 0px;
}
.services img {
  color: white;
}
.services p {
  color: white;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  text-align: left;
  text-transform: uppercase;
}
.menu {
  padding: 10px 0px 10px 30px;
  gap: 10px;
  opacity: 0px;
  margin-top: 20px;
}
.text-menu {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  text-align: left;
  color: #686868;
  gap: 0px;
  opacity: 0.5;

  text-transform: uppercase;
}
.header-dasboard-banner {
  background-color: #003867;
  gap: 8px;
  opacity: 0px;
  display: flex;
  justify-content: center;
}
.header-dasboard-banner img {
  width: 198px;
  height: 57.61px;
  gap: 0px;
  opacity: 0px;
  padding: 32px 8px 32px 8px;
}
</style>
