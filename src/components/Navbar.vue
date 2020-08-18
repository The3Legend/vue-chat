<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Vue Chat</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"
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
<style scoped></style>
