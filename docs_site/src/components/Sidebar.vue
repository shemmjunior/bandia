<template>
  <aside class="sidebar">
    <h1 class="app-name">Bandia</h1>
    <div class="sidebar-nav">
      <ul>
        <li>
          <p>Getting Started</p>
          <ul>
            <li><b> Package Installation</b></li>
            <ul class="app-sub-header">
              <li>
                <router-link to="/installation" class="section-link"
                  >Installation</router-link
                >
              </li>
            </ul>
            <li><b> Demo</b></li>
            <ul class="app-sub-header">
              <li>
                <router-link to="/playground" class="section-link"
                  >Playground</router-link
                >
              </li>
            </ul>
            <li><b> Docs</b></li>
            <ul class="app-sub-header">
              <li>
                <router-link to="/person" class="section-link"
                  >Person</router-link
                >
              </li>
              <li>
                <router-link to="/finance" class="section-link">Finance</router-link>
              </li>
              <li>
                <router-link to="/company" class="section-link">Company</router-link>
              </li>
              <li>
                <router-link to="/dates" class="section-link">Dates</router-link>
              </li>
              <li>
                <router-link to="" class="section-link"
                  >Miscallenous</router-link
                >
              </li>
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
