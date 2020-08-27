<template>
  <div class="message-bubble" :class="me">
    <span class="from" :class="me">
      <span>{{ uuid }}</span>
    </span>
    <span class="message-text">
      {{ text }}
      <span class="fontSize">{{ `${data.toLocaleTimeString()}` }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "message-bubble",
  props: ["uuid", "text"],
  computed: {
    me() {
      let result = false;
      if (this.$store.getters.getMyUuid === this.uuid) {
        result = true;
      }
      return result ? "me" : "";
    },
  },
  data() {
    return {
      data: new Date(),
    };
  },
};
</script>

<style scoped>
.message-bubble {
  display: block;
  max-width: 50%;
  margin-bottom: 4px;
  float: left;
  clear: both;
}

.message-text {
  padding: 8px;
  margin: 4px;
  text-align: left;
  background-color: #dfdfdf;
  border-radius: 4px;
}

.message-bubble.me {
  float: right;
}

.message-bubble.me .message-text {
  background-color: #9ec6f5;
  padding: 7 px;
}

.from {
  float: left;
  margin: 4px;
  font-size: 14px;
  color: #9da7af;
  padding: 5px;
}

.from.me {
  display: none;
}

.message-bubble span {
  display: block;
}

.message-bubble.me br.me {
  display: none;
}
.fontSize {
  font-size: 9px;
}
</style>
