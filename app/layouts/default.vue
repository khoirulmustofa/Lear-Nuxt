<template>
  <div>
    <header style="background: #333; padding: 1rem; color: white;">
      <NuxtLink prefetch-on="visibility" to="/" style="color: white; margin-right: 1rem;">Home</NuxtLink>
      <NuxtLink prefetch-on="visibility" to="/about" style="color: white; margin-right: 1rem;">About</NuxtLink>
      <NuxtLink prefetch-on="visibility" to="/products" style="color: white;">Products</NuxtLink>
    </header>

    <!-- Konten halaman akan muncul di sini -->
    <main>
      <slot />
    </main>

    <footer style="margin-top: 2rem; padding: 1rem; background: #eee; text-align: center;">
      &copy; 2025 Nuxt App
    </footer>
  </div>
</template>