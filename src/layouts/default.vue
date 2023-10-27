<script setup>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Navigation from '../components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main class="main">
    <Breadcrumbs />
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in" >
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </main>
</template>

<style lang="scss">
  main {
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }
</style>