<template>
  <div>
    <h1>Daftar Produk</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
          {{ product.name }} - Rp{{ product.price }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const products = [
  { id: 1, name: 'Laptop', price: 15000000 },
  { id: 2, name: 'Mouse', price: 100000 },
  { id: 3, name: 'Keyboard', price: 500000 }
]
</script>