<template>
  <div style="border: 3px solid red; padding: 20px;">
    <h2>🔐 Admin Panel</h2>
    <NuxtLink to="/admin/dashboard">Dashboard</NuxtLink> |
    <NuxtLink to="/admin/users">Users</NuxtLink>
    <hr />
    <slot />
  </div>
</template>