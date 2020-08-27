<template>
  <div class="back">
    <b-navbar  toggleable="lg" type="dark" variant="">
      <div>
        <img src="@/media/2.jpg" width="80px" alt="" height="70px" />
      </div>
      <b-navbar-brand class="color" href="#">Vue Chat</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="size" href="#"
            >Welcome
            <strong>{{ uuid }}</strong>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Navbar",
  components: {},
  mounted() {
    this.$pnSubscribe({
      channels: ["vueChat"],
    });
  },
  computed: {
    ...mapGetters({
      uuid: "getMyUuid",
    }),
  },
};
</script>
<style scoped>
.back {
  background-color: #000000;
}
.color{
  margin-left: 20px;
  color:#6F8080;
}
.size{
  font-size: 1.2em;
}
</style>
