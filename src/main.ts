import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithubAlt,
  faLinkedinIn,
  faDiscord,
  faSteamSymbol,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faGithubAlt, faLinkedinIn, faDiscord, faSteamSymbol)

Vue.component("fa", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
