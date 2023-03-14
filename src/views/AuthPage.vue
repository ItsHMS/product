

<template>
  <main>

    <!-- <TheWelcome /> -->
    <section id="signUp">
      <img src="images/el-1.png" alt="elips" class="img-fluid elips-1">
      <img src="images/el-2.png" alt="elips" class="img-fluid elips-2">

      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="signUpLeft">
              <h2 class="signUpTitle">
                <span>Revolutionizing</span> Product Design <span>with AI Technology</span>
              </h2>
              <div class="contactBanner">
                <img src="images/contactBanner.png" alt="contactBanenr" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="signUpForm">
              <form @submit="login($event)">
                <div class="formTop">
                  <a href="#" @click="isSignup = true" class="btn" :class="{ active: isSignup }">
                    Sign up
                  </a>

                  <a href="#" @click="isSignup = false" class="btn borderNone" :class="{ active: !isSignup }">
                    Sign In
                  </a>
                </div>

                <div class="mainForm">

                  <div class="singleInput">
                    <label for="email">
                      EMAIL ADDRESS
                    </label>
                    <input type="email" v-model="email" name="" id="email" class="form-control">
                  </div>

                  <div class="singleInput">
                    <label for="password">
                      PASSWORD
                    </label>
                    <input type="password" v-model="password" name="" id="password" class="form-control" placeholder="">
                  </div>

                  <div class="singleInput">
                    <input type="submit" :value="isSignup ? 'Sign up' : 'Log In'" class="btn signUpBtn">
                  </div>

                  <p class="loginWith d-flex align-items-center justify-content-center">
                    <img src="images/line.png" alt="line" class="img-fluid">
                    <span class="px-3 font-weight-500">
                      lOGIN WITH
                    </span>
                    <img src="images/line.png" alt="line" class="img-fluid">
                  </p>

                  <a @click="pdfMaker" class="googleLogin btn">
                    <img src="images/google.png" alt="google" class="img-fluid">
                    Google
                  </a>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { jsPDF } from "jspdf";
import axios from 'axios'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const Router = useRouter()
const email = ref("test@test.com")
const password = ref("123456789")
const isSignup = ref(false)
const login = async (e) => {
  e.preventDefault();
  try {
    if (!isSignup.value) {
      const { data } = await axios.post('https://c141c63a7dfa0b.lhr.life/api/auth/local', {
        identifier: email.value,
        password: password.value
      })
      const { jwt, user } = data
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('jwt', JSON.stringify(jwt))
      console.log(data);
      Router.push({ name: "pdfs" })

    }
    else {
      const { data } = await axios.post('https://c141c63a7dfa0b.lhr.life/api/auth/local/register', {
        username: email.value.substring(0, email.value.indexOf("@")),
        email: email.value,
        password: password.value
      })
      const { jwt, user } = data
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('jwt', JSON.stringify(jwt))
      console.log(data);
      Router.push({ name: "pdfs" })

    }

  } catch (error) {
    console.log(error);
  }

}
</script>
<style scoped>
.font-weight-500 {
  font-weight: 500 !important;
}
</style>