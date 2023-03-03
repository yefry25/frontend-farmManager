<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()

defineComponent({
  name:'App'
})

/* $q.dark.set(true) */
</script>
