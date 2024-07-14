<template>
  <div class="header-content">
    <input class="search-box" type="text" placeholder="Faite une recherche" />


<div class="user-info2">
      <div class="btn-login2">
       <img src="../../assets/people.svg" />
        <p class="btn-login-text2"> Paola Agonsa</p>
        <img class="arrow" src="../../assets/arrow.svg" />
      </div>

    </div>
    <div class="user-info">
      <div class="btn-login">
       <img src="../../assets/ph_power-light.svg" />
        <p class="btn-login-text"> Déconnexion</p>
      </div>

    </div>

    
  </div>
</template>

<script setup></script>

<style scoped>
.arrow {
  width: 12px;
height: 5px;
top: 10px;
left: 6px;
gap: 0px;
border: 2px 0px 0px 0px;
opacity: 0px;

}
.btn-login2{
    display:flex;
}

.user-info{
    width:165px;
    margin-top:5px;
    height:64px;
}
.btn-login-text { 
color: #FF4D4F;
font-family: 'Montserrat';
font-size: 16px;
font-weight: 500;
line-height: 16px;

}
.btn-login {
display:flex;
justify-content: space-between; 
align-items: center;
margin-top:10px;   
padding: 8px 8px 8px 8px;
border-radius: 5px 5px 5px 5px;
background: #FFF1F0;
border-style: solid;
border-color: #F2F4F8;
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
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  left: 243px;
  padding: 0px 65.9px 0px 65.9px;
  gap: 0px;
  opacity: 0px;
}
</style>
