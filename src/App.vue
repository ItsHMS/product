

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
                                </div>
                              </header> -->
  <div>
    <header id="header" class="loginHeader">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="@/assets/images/logo.png" alt="logo" class="img-fluid logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <img src="@/assets/images/menu.png" alt="menu" class="img-fluid">
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Technology</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Company</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>

                <li style="cursor: pointer;" v-if="!loggedIn" @click="login" class="nav-item">
                  <a class="nav-link">Log In</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link btn" @click="newProject">New Project</a>
                </li>

                <li v-if="!loggedIn" @click="login" class="nav-item">
                  <a class="nav-link btn">Sign Up</a>
                </li>

                <li v-if="loggedIn" @click="logout" class="nav-item">
                  <a class="nav-link btn">Logout</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
<script setup>
/*
To be done
1.auth pages
2.vue based or html based
*/
import { storeToRefs } from "pinia";
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/user';

import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const store = useUserStore();
const { loggedIn } = storeToRefs(store)
const Router = useRouter()
const Route = useRoute()
onMounted(() => {
  console.log("mounted");
  if (localStorage.getItem('user')) {
    loggedIn.value = true
  } else {
    loggedIn.value = false
  }
})
const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("jwt")
  Router.push({ name: 'home' })
  loggedIn.value = false

}
const login = () => {
  Router.push({ name: 'auth' })

}
const newProject = () => {
  Router.push({ name: 'home' })
}
</script>

<style scoped></style>
