<template>
  <div>
    <h1>Detail Produk ID: {{ id }}</h1>
    <p>Produk: {{ product?.name }} - Rp{{ product?.price }}</p>
    <NuxtLink to="/products">← Kembali ke daftar</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const id = computed(() => route.params.id)

const products = [
  { id: 1, name: 'Laptop', price: 15000000 },
  { id: 2, name: 'Mouse', price: 100000 },
  { id: 3, name: 'Keyboard', price: 500000 }
]

const product = computed(() => products.find(p => p.id === Number(id.value)))
</script>