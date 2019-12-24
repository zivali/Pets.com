  <template>
  <div class="container-fluid body">
    <b-container>
      <div>
        <b-card-group deck class="mt-4">
          <!--所有card都在同一個card deck-->
          <div v-bind:key="index" v-for="(data, index) in pets">
            <b-card
              class="card col-auto text-center mb-3 hovereffect shadow"
              style="width: 20rem;"
              img
              img-fluid
              img-top
              img-responsive
              alt="Image"
              v-if="data.album_file"
              :img-src="data.album_file"
            >
              <div class="overlay">
                <router-link class="info" :to="`/animal/${data.animal_id}`">帶我回家</router-link>
              </div>

              <!--sex-->
              <div>
                <span class="detail-text --title">
                  <font-awesome-icon :icon="['fas', 'paw']" />性別
                </span>
                <span class="detail-text" v-if="data.animal_sex == 'M'">男生</span>
                <span class="detail-text" v-else-if="data.animal_sex == 'F'">女生</span>
                <span class="detail-text" v-else>未知</span>
              </div>
              <!--size-->
              <div>
                <span class="detail-text --title">
                  <font-awesome-icon :icon="['fas', 'paw']" />體型
                </span>
                <span class="detail-text" v-if="data.animal_bodytype == 'SMALL'">小型</span>
                <span class="detail-text" v-else-if="data.animal_bodytype == 'MEDIUM'">中型</span>
                <span class="detail-text" v-else>大型</span>
              </div>
              <!--location-->
              <div>
                <span class="detail-text --title">
                  <font-awesome-icon :icon="['fas', 'paw']" />所在地
                </span>
                <span class="detail-text">{{data.animal_place.slice(0,3)}}</span>
              </div>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </b-container>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    
  </div>
</template>
    
<script>
import axios from "axios";
let api =
  "https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";

export default {
  methods: {
    //infinite loading
    infiniteHandler($state) {  
      let key = "&$top=" + this.top + "&$skip=" + this.skip + "&animal_kind=狗"; //query params
      axios.get(api + key).then(response => {
        if (response.data) {
          this.pets = this.pets.concat(response.data);
          this.skip += 20;  //keep on loading 20 more
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  },
  data() {
    return {
      pets: [],
      top: 20,
      skip: 0
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../css/card.scss";
</style>