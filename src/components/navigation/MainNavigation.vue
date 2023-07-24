<template>
  <div id="router">
    <router-link
      v-for="(route, index) in routesList"
      :key="index"
      :to="route.path"
      >{{ route.name }}</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/routes';
import { DefineComponent } from 'vue';

const routesList = routes as {
  path: string;
  component: DefineComponent<{}, {}, any>;
  name: string;
}[];
</script>

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
