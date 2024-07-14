<template>

  <div class="login-dashboard">
    <div class="login-dasboard-banner">
      <div class="dashboard_img">
        <img src="../../assets/img.svg" />
      </div>

      <div class="text_dashboard_img">
        <p>Bienvenue dans l’espace des e-services du MEEM</p>
      </div>
    </div>
    <div class="login-dasboard-acces">
      <div class="acces-block">
        <p class="text_acces_block_1">Accédez à l’espace de gestion</p>
        <div class="acces_block_2">
          <p class="text_acces_block_2">
            Vous serez rediriger vers le portail des e-services pour une authentification
          </p>
        </div>
        <div class="btn-login">
          <p class="btn-login-text">identifiez-vous</p>
        </div>
      </div>
    </div>
  
  </div>
    <div class="end-page">
    <p class="end-page-text"> Ministères de l’eau et des mines @ 2024. TOUS DROITS RÉSERVÉS. </p>
    </div>
</template>

<script setup></script>

<style scoped>
.end-page{  
  margin-top:120px;
padding: 24px 80px 10px 80px; 
}
.end-page-text{ 
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 19.5px;
text-align: center;

}
.btn-login-text {
  color: white;
  text-align: center;
  background-color: #1b4176;
  width: 227px;
  padding: 24px 0px 24px 0px;
  border-radius: 10px 10px 10px 10px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
}
.btn-login {
  display: flex;
  justify-content: center;
}
.acces_block_2 {
  display: flex;
  justify-content: center;
  weight: 396px;
}
.acces-block {
  margin-top: 100px;
}
.text_acces_block_1 {
  color: #0c0c0d;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  line-height: 48.76px;
  text-align: center;
  margin: 0px;
}

.text_acces_block_2 {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;
  text-align: center;
  width: 396px;
  height: 40px;
  gap: 0px;
  opacity: 0px;
  color: #8f8f90;
}
.dashboard_img {
  display: flex;
  justify-content: center;
}
.text_dashboard_img {
  display: flex;
  justify-content: center;

  margin-bottom: 25px !important;
}
img {
  width: 354px;
  height: 103px;
  margin-top: 74px;
  gap: 0px;
  opacity: 0px;
}

.text_dashboard_img p {
  margin-top: 25px !important;
  width: 600px;
  font-family: "Montserrat";
  font-size: 39px;
  font-weight: 700;
  line-height: 47.54px;
  text-align: center;
  color: white;
}
.text_connect {
  font-family: "Montserrat";
  font-style: normal;
  font-size: 39px;
  color: white;
  font-weight: 700;
  line-height: 47.54px;
  text-align: center;
}
.login-dashboard {
  display: grid;
  grid-template-rows: 2fr 5fr;
  height: 100vh;
}

.login-dasboard-banner {
  background: #1b4176;
}
.login-dasboard-acces {
  background-color: white;
}
</style>
