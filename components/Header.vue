<template>
  <header
    class="header bg-light shadow"
    :class="{
      'navbar-top': scrollPosition < scrollOffset,
      'navbar-scroll': scrollPosition > scrollOffset,
      'navbar-open': navbarOpen,
    }"
  >
    <nav class="navbar navbar-light navbar-expand-md">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
          <Lamm width="50px" color="text-primary" /><span
            class="ps-3 text-primary font-serif"
            >Gasthaus Lamm</span
          >
        </NuxtLink>

        <button
          @click="navbarOpen = !navbarOpen"
          type="button"
          class="navbar-toggler collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-1"></i>
        </button>

        <div
          id="navbarCollapse"
          class="navbar-collapse collapse flex-grow-0 ms-auto"
        >
          <ul class="navbar-nav">
            <li v-for="(item, i) in menu" :key="i">
              <NuxtLink
                :to="item.to"
                class="nav-link text-primary"
                :class="
                  $nuxt.$route.name === item.name.toLowerCase() ? 'fw-bold' : ''
                "
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
      scrollOffset: 100,
      scrollPosition: 0,
      menu: [
        { name: "Schlafen", to: "/schlafen" },
        { name: "Feiern", to: "/feiern" },
        { name: "Essen", to: "/essen" },
      ],
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    this.updateScroll();
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
