<template>
  <div id="router">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#router {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

#router a {
  color: #42b983;
}

#router a.router-link-active {
  border: 1px solid;
  padding: 2px 4px;
}
</style>
