<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="color text-white">
      <q-toolbar >
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Farm Manager
        </q-toolbar-title>
        <q-btn icon="mdi-login-variant" class="bg-primary" @click="logout"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" overlay behavior="mobile">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="color text-white">
      <q-toolbar class="text-center">
        <q-toolbar-title>
          <div>Farm Manager-{{ date.getFullYear() }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '../stores/store.js'
import { useRouter } from 'vue-router';
const router = useRouter()

let tok = ref(0)
const date = new Date()
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const logout = () => {
  router.push('/login');
  useStore.token = undefined;
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');

}

</script>

<style lang="scss" scoped>
.color {
  background-color: darkgreen
}
</style>
