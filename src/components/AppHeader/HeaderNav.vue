<template>
  <div>
    <ul class="nav">
      <router-link
        v-for="link in navLinks"
        :key="link.text"
        :to="link.path"
        custom
        v-slot="{ isActive, navigate }"
      >
        <li class="nav-item font-yellow font-bold" :class="{ active: isActive }" @click="navigate">
          {{ link.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      navLinks: [
        { path: '/about', text: 'ABOUT' },
        { path: '/work', text: 'WORK' },
        { path: '/contact', text: 'CONTACT' },
      ],
    }
  },
  methods: {},
}
</script>

<style>
.nav {
  width: 50%;
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.nav-item {
  cursor: pointer;
  margin-right: 20px;
  list-style-type: none;
}

.nav-item.active {
  font-weight: bold;
}
</style>
