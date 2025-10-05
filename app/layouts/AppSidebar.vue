<script setup>
import AppMenu from './AppMenu.vue'
import { useLayout } from '~/layouts/composables/layout.js'

// Tambahkan event listener saat komponen dimount
// import { onMounted, onBeforeUnmount } from 'vue'

const { layoutConfig, resetMenu } = useLayout()

// layoutState

// const sidebarRef = ref(null)

// const handleClickOutside = (event) => {
//   // Cek jika klik terjadi di luar sidebar
//   if (sidebarRef.value && !sidebarRef.value.contains(event.target)) {
//     // Reset menu hanya jika menu sedang aktif
//     if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
//       resetMenu()
//     }
//   }
// }

// onMounted(() => {
//   if (import.meta.client) {
//     document.addEventListener('click', handleClickOutside)
//   }
// })

// onBeforeUnmount(() => {
//   if (import.meta.client) {
//     document.removeEventListener('click', handleClickOutside)
//   }
// })
</script>

<template>
  <div ref="sidebarRef" class="layout-sidebar flex flex-col h-full">
    <div v-if="layoutConfig.menuMode === 'overlay'" class="self-end p-2">
      <Button
        type="button"
        class="p-sidebar-close p-link"
        icon="pi pi-times"
        @click="resetMenu"
      />
    </div>
    <AppMenu></AppMenu>
  </div>
</template>

<style lang="scss" scoped></style>
