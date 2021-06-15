<template>
  <main>
    <button class="sidebar-toggle" aria-label="menu">
      <div class="sidebar-toggle-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <Sidebar />
    <section class="content">
        <router-view />
    </section>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>
