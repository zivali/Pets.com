  <template>
  <b-container>
    <div>
      <b-card-group deck class="mt-3">
        <!--所有card都在同一個card deck-->
        <div v-bind:key="data.index" v-for="data in pets">
          <b-card
            class="col-auto text-center mb-3 img-fluid"
            style="width: 20rem;"
            v-bind:title="data.animal_kind"
            img
            v-if="data.album_file"
            :img-src="data.album_file"
            alt="Image"
            card-img-top
            img-top
            tag="article"
          >
            <!--<b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>-->
            <b-button href="#" variant="info">View pet</b-button>
          </b-card>
        </div>
      </b-card-group>
    </div>
  </b-container>
</template>
    
    <script>
export default {
  data() {
    return {
      pets: []
    };
  },
  mounted() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
    )
      .then(response => response.json())
      .then(data => {
        this.pets = data;
      });
  }
};
</script>
    <style>
@import "./img.css";
</style>