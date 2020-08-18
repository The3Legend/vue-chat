<template>
  <div class="message-bubble" :class="me">
    <div class="flex">
      <div>
        <span class="from" :class="me"><strong>{{ uuid }}</strong></span>
      </div>
         <div>
        <b-avatar :size="24"></b-avatar>
      </div>
    </div>
    <span class="message-text"> {{ text }}</span>
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
    return {};
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
}

.from {
  float: left;
  margin: 4px;
  font-size: 10px;
  color: #9da7af;
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
.flex {
  display: flex;
}
</style>
