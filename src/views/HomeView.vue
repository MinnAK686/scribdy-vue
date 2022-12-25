<template>
  <div class="home">
    <Navbar></Navbar>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <MobileNavTabs></MobileNavTabs>
  </div>
</template>

<script>
import MobileNavTabs from "../components/MobileNavTabs";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
export default {
  components: {
    MobileNavTabs,
    Footer,
    Main,
    Header,
    Navbar,
  },
  name: "HomeView",
};
</script>
