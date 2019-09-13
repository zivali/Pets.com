<template>
  <div>
    <b-navbar class="navbar-static-top" toggleable="lg" type="dark" variant="info">
      <b-container>
        <router-link class="navbar-brand" to="/">Pets.com (施工中...)</router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <b-link class="b-nav-item" to="/dogs">領養狗狗</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link class="b-nav-item" to="/cats">領養貓貓</b-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link class="b-nav-item" to="/about">關於</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- filter section -->
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
@import "./css/Navbar.css";
</style>