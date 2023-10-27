<script setup>
import Logo from '../components/icons/IconStarwars.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = router.getRoutes()

</script>

<template>
  <div class="navbar-container mb-2">
    <Logo class="logo" />
    <nav class="navbar">
      <ul>
        <li v-for="route in routes" :key="route" v-show="route.meta.navbar">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.navbar-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  background-color: #123;
  box-shadow: 0 0 5px #123;

  .logo {
    display: block;
    width: 50px;
    height: 50px;
  }
  ul {
    display: flex;

    li:not(:first-child) {
      margin-left: 15px;

      .router-link-exact-active {
        font-weight: 700;
      }
    }
  }
}

</style>
