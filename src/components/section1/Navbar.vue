<template>
    <!-- <nav>
        <a href="" class="logo">AUTHSCORP</a>
        <div>
            <ul>
                <li class="nav-item active">
                    <a href="">Proudct</a>
                </li>
                <li class="nav-item">
                    <a href="">Download</a>
                </li>
                <li class="nav-item">
                    <a href="">Support</a>
                </li>
                <li class="nav-item">
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </nav> -->
    <v-card
    color="grey lighten-4"
    flat = true
    tile
    class="margin-x"
  >
    <v-toolbar  flat=true>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="logo">AUTHSCORP</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      <a href="" class=" nav-item active">Product</a>
      <a href="" class="nav-item">Download</a>
      <a href="" class="nav-item">Support</a>
      <a href="" class="nav-item">Contact</a>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
    .nav-item {
        color: gray;
        margin: 0 2.5rem;
        font-family: Helvetica; 
    }
    .active {
        color:  #264eee;
    }
    .logo {
        color: black;
        
        font-family: Helvetica; 
        
    }

    .margin-x {
        margin: 0 5rem;
    }
    /* nav {
        display: flex;
        justify-content: space-between;
        margin: 4rem 10rem;
    } */

    /* ul {
        list-style: none;
        display: flex;
    }
    li {
        margin: 0 1.5rem;
    } */
    a {
        text-decoration: none;
        font-family: Helvetica; 
    }
</style>
