<template>
  <aside class="sidebar">
    <h1 class="app-name">Bandia</h1>
    <div class="sidebar-nav">
      <ul>
        <li>
          <p>Getting Started</p>
          <ul>
            <!-- <li><a href="">Installation</a></li>
            <ul class="app-sub-header">
              <li><a class="section-link" href="">Usage</a></li>
            </ul>
            <li><a href="">Docs</a></li>
            <ul class="app-sub-header">
              <li><a class="section-link" href="">Person</a></li>
              <li><a class="section-link" href="">Finance</a></li>
              <li><a class="section-link" href="">Company</a></li>
              <li><a class="section-link" href="">Dates</a></li>
              <li><a class="section-link" href="">Miscallenous</a></li>
            </ul> -->
            <li> <b> Generate Data</b></li>
            <ul class="app-sub-header">
              <li><router-link to="/" class="section-link">Playground</router-link></li>
              <li><router-link to="/docs" class="section-link">Docs</router-link></li>

            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  font-family: "segoe ui";
}

.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}
</style>