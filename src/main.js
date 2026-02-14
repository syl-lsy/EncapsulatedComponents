import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from '@/components/Icon/Icon.vue'
import Button from '@/components/Button/Button.vue'
import Card from '@/components/Card/Card.vue'
import './assets/style/index.scss'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const app = createApp(App)
app.component('LiuIcon', Icon)
app.component('LiuButton', Button)
app.component('LiuCard', Card)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
