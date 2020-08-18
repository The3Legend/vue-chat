<template>
  <div class="chat-container">
    <div class="heading">
      <h1>{{title + '- User: ' + uuid }}</h1>
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
  import ChatLog from '@/components/ChatLog';
  import MessageInput from '@/components/MessageInput';
  import {mapGetters} from 'vuex';

  export default {
    name: 'chat-container',
    components: {
      ChatLog,
      MessageInput,
    },
    data() {
      return {
        title: 'Vue Chat ',
      };
    },
    mounted() {
      this.$pnSubscribe({
         channels: ['vueChat'],
      });
    },
    computed: {
    ...mapGetters({
      uuid: 'getMyUuid',
    }),
  },
  };
</script>

<style scoped>
h1 {
  display: table-cell;
  vertical-align: middle;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
}

.chat-container {
  display: table;
  max-width: 50%;
  min-width: 200px;
  width: 50%;
  height: 550px;
  background-color: #FFFFFF;
  border: solid 1px #BFBFBF;
  border-radius: 3px;
  margin-top: 20px;
  opacity: 0.7;

}

.heading {
  display: table;
  width: 100%;
  height: 28px;
  text-align: center;
  background-color: #4690FB;
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
