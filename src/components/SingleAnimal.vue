<template>
  <div class="container body">
    <div class="row justify-content-center my-5">
      <!-- image -->
      <div class="col-md-8 order-md-1 text-center">
        <b-img :src="pet[0].album_file" class="img-fluid shadow" alt />
      </div>
      <!-- main text -->
      <div class="col-md-4 order-md-2 mt-md-0">
        <h1 class="h3 ml-4">{{pet[0].animal_id}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
let api =
  "https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";

export default {
  mounted() {
    this.petId = this.$route.params.petId;
    let key = "&animal_id=" + this.petId; //query params

    axios.get(api + key).then(response => {
      this.pet = this.pet.concat(response.data);

      // eslint-disable-next-line no-console
      console.log(this.pet);
    });
  },
  data() {
    return {
      petId: "",
      pet: []
    };
  }
};
</script>
<style>
@import "./css/SingleAnimal.css";
</style>