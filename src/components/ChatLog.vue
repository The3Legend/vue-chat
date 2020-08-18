<template>
  <div class="chat-log" ref="chatLogContainer">
    <message-bubble
      v-for="msg in vueChatMsg"
      :key="msg.id"
      :uuid="msg.message.uuid"
      :text="msg.message.text"
    ></message-bubble>
  </div>
</template>

<script>
import MessageBubble from "@/components/MessageBubble";
function scrollBottom() {
  this.$el.scrollTo(0, this.$el.scrollHeight);
}

export default {
  name: "chat-log",
  components: { MessageBubble },
  data() {
    return {
      vueChatMsg: this.$pnGetMessage("vueChat"),
    };
  },
  watch: {
    vueChatMsg: function() {
      this.$nextTick(scrollBottom);
    },
  },
};
</script>

<style scoped>
.chat-log {
  display: block;
  height: inherit;
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box;
  overflow-y: scroll;
}

.chat-log::-webkit-scrollbar {
  display: none;
}
</style>
