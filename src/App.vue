<template>
  <div id="app">
    <Navbar/>
    <chat-container />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ChatContainer from "@/components/ChatContainer";
export default {
  name: "App",
  components: {
    ChatContainer,
    Navbar,
  },
};
</script>

<style>
body {
  background-image: url('./media/3.jpg');
  background-size: cover;

}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
