<template>
  <div>
    <Navbar></Navbar>
    <Authenticator></Authenticator>
    <AuthHomeSections></AuthHomeSections>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/auth/Footer";
import AuthHomeSections from "../components/auth/AuthHomeSections";
import Navbar from "../components/auth/Navbar";
import Authenticator from "../components/auth/Authenticator.vue";
export default {
  components: {
    Footer,
    AuthHomeSections,
    Navbar,
    Authenticator,
  },
};
</script>

<style></style>
