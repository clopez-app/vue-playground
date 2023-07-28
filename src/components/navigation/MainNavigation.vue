<template>
  <div id="router">
    <template v-for="(route, index) in routesList" :key="index">
      <router-link v-if="route.path" :to="route.path">{{
        route.name
      }}</router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { routes } from '../../routes';

const routesList = routes as {
  path: string;
  component: () => Promise<typeof import('*.vue')>;
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
