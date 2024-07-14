<template>
  <div class="content-header">
    <div class="search">
      <input class="search-box" type="text" placeholder="Faite une recherche" />
    </div>
    <div class="user-info">
   <div class="notification-icon">
        <span class="bell-icon"> <img src="../../assets/cloche.svg" /> </span>
        <span class="notification-badge"> <img src="../../assets/red-cloche.svg" /> </span>
    </div>
      <div class="user-dropdown">
        <img src="../../assets/people.svg" />
        <p class="btn-login-text2">Paola Agonsa</p>
        <img class="arrow" src="../../assets/arrow.svg" />
      </div>
      <div class="btn-login">
        <img src="../../assets/ph_power-light.svg" />
        <p class="btn-login-text">Déconnexion</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.arrow{
  margin-right: 20px;
}
.notification-icon {
    position: relative;
    display: inline-block;
    font-size: 50px; /* Adjust size as needed */
    margin-right: 20px;
}

.notification-badge {
     position: absolute;
    top: 15px;
    right: -11px;
    color: white;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: bold;
}


.user-notification{
  display: contents;
}
.btn-login-text2{
  margin-top: 25px;
  font-family: 'Poppins';
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;

}
.user-dropdown {
     background-color: red;
    width: 100%;
    display: contents;

}
.btn-login-text {
  color: #ff4d4f;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
}
.btn-login {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 8px 8px 8px 8px;
  border-radius: 5px 5px 5px 5px;
  background: #fff1f0;
  border-style: solid;
  border-color: #f2f4f8;
}
.search-box {
  width: 530px;
  padding: 10px 16px 10px 16px;
  gap: 0px;
  border-radius: 4px 4px 4px 4px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #e0e0e0;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #b3b3b3;
  background-color: #fafafa;
}
.user-info {
  display: flex;
  gap: 10px;
}
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px 20px 60px;
  background-color: #f9f9f9;
}
</style>
