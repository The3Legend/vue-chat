<template>
    <div class="chat-container">
      <div class="heading">
        <h1>{{title + uuid }}</h1>
      </div>
      <div class="body">
        <div class="table">
          <chat-log></chat-log>
          <message-input></message-input>
        </div>
      </div>
    </div>
</template>

<script>
import ChatLog from "@/components/ChatLog";
import MessageInput from "@/components/MessageInput";
import { mapGetters } from "vuex";

export default {
  name: "chat-container",
  components: {
    ChatLog,
    MessageInput,
  },
  data() {
    return {
      title: "User: ",
    };
  },
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
h1 {
  display: table-cell;
  vertical-align: middle;
  margin: 0;
  font-size: 20px;
  font-weight: normal;
  color: bisque;

}

.chat-container {
  display: table;
  min-width: 300px;
  width: 30%;
  height: 33em;
  background-color: #ffffff;
  border: solid 1px #bfbfbf;
  border-radius: 3px;
  opacity: 0.5;
  margin-left: 40%;
  margin: auto;
  margin-top: 30px;

}

.heading {
  display: table;
  width: 100%;
  height: 28px;
  text-align: center;
  background-color: black;
  border-radius: 3px 3px 0 0;
  -ms-user-select: none;
  user-select: none;
}

.body {
  display: block;
  width: auto;
  height: inherit;
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}


</style>
