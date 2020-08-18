import Vue from "vue";
import App from "./App";
import store from "./store";
import PubNubVue from "pubnub-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const publish_Key = "pub-c-820bb3c5-eaca-424b-afad-fa42afef2709";
const subscribe_Key = "sub-c-70a93ca4-d809-11ea-b3f2-c27cb65b13f4";
console.log(publish_Key);
console.log(subscribe_Key);
const myUuid = fourCharID();
const me = {
  uuid: myUuid,
};

try {
  if (!publish_Key || !subscribe_Key) {
    throw "PubNub Keys are missing.";
  }
} catch (err) {
  console.log(err);
}
Vue.use(
  PubNubVue,
  {
    subscribeKey: subscribe_Key,
    publishKey: publish_Key,
    ssl: true,
  },
  store
);

function created() {
  this.$store.commit("setMe", { me });
}

function fourCharID() {
  let text = prompt("lol");
  console.log(text);
  return text;
}

new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>",
  created,
});
