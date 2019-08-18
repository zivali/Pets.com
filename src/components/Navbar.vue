<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
            <b-navbar-brand href="#">Pets.com</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
            </b-collapse>
          </b-container>
      </b-navbar>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            meal: ''
        }
    },
  methods: {
    getMeal() {
      
    }
  }
}    
</script>