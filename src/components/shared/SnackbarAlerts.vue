<template>
  <Teleport to="body">
    <div class="snackbar-body" :class="type" @click="close">
      {{ text }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  type: 'warning' | 'success' | 'error';
  autoClose: boolean;
  identifier: string;
}>();

function close(): void {
  const activeSnackbar = document.getElementsByTagName(props.identifier)[0];
  document.body.removeChild(activeSnackbar);
}
</script>

<style scoped>
.snackbar-body {
  display: block;
  border-radius: 8px;
  min-height: 24px;
  min-width: 120px;
  position: absolute;
  z-index: 99;
  right: 8px;
  top: 8px;
  padding: 0px 2px;
  text-align: center;
  line-height: 22px;
}

.snackbar-body:hover {
  cursor: pointer;
}

.warning {
  background-color: orange;
}

.success {
  background-color: aquamarine;
}

.error {
  background-color: crimson;
  color: white;
}
</style>
