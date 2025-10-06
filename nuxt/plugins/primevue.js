import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'

import { ConfirmationService, ToastService } from 'primevue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.use(ConfirmationService)
  // nuxtApp.vueApp.component('Timeline', Timeline);
  // nuxtApp.vueApp.component('Message', Message);
  // nuxtApp.vueApp.component('Menu', Menu);
  // nuxtApp.vueApp.component('Panel', Panel);
  // nuxtApp.vueApp.component('Tree', Tree);
  // nuxtApp.vueApp.component('Button', Button);
})
