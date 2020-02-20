<template>
  <div class="bg-section">
    <v-container>
      <v-row>
        <v-col>
          <div class="bg-white">
            <div class="square-welcome-1"></div>
            <div class="square-welcome-2"></div>
            <h2>Work In Progress</h2>
            <p>We Will Be There Soon</p>
            <v-btn color="primary" class="white--text margin-top" x-large>Get In Touch !</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
p {
  color: #7c7d8d;
}
.margin-top {
  margin-top: 3rem;
}
.bg-section {
  background: #f5f9ff;
  padding: 10rem 0;
}
.bg-white {
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
h2 {
  font-size: 57px;
  font-family: Helvetica;
  color: #264eee;
}
h3 {
  font-family: Helvetica;
  color: #7c7d8d;
  font-size: 40px;
}
.square-welcome-1 {
  content: " ";
  transform: rotate(-30deg);
  background-image: linear-gradient(
    180deg,
    rgba(38, 78, 238, 0) 0%,
    rgba(38, 78, 238, 0.08) 100%
  );
  z-index: 2;
  width: 700px;
  height: 1000px;
  position: absolute;
  top: -240px;
  right: -180px;
}
.square-welcome-2 {
  content: " ";
  transform: rotate(-30deg);
  background-image: linear-gradient(
    180deg,
    rgba(38, 78, 238, 0) 0%,
    rgba(38, 78, 238, 0.06) 100%
  );
  z-index: 2;
  width: 700px;
  height: 1000px;
  position: absolute;
  top: -240px;
  right: -400px;
}
</style>


<script>
export default {
  data() {
    return {
      valueDeterminate: 85
    };
  }
};
</script>