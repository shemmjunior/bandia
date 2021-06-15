<template>
<div>
  <nav class="app-nav no-badge">
    <ul><li>
      <a href="https://github.com/shemmjunior/bandia" target="_blank">Github Repo</a>
      </li></ul>
  </nav>
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
  </div>
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

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #282a36;
}

.hljs-built_in,
.hljs-selector-tag,
.hljs-section,
.hljs-link {
  color: #8be9fd;
}

.hljs-keyword {
  color: #ff79c6;
}

.hljs,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-title {
  color: #50fa7b;
}

.hljs-string,
.hljs-meta,
.hljs-name,
.hljs-type,
.hljs-attr,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #f1fa8c;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion {
  color: #6272a4;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-literal,
.hljs-number {
  color: #bd93f9;
}

.hljs-emphasis {
  font-style: italic;
}

</style>
