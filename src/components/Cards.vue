  <template>
  <b-container>
    <div> 
      <b-card-group deck class="mt-3">
        <!--所有card都在同一個card deck-->
        <div v-bind:key="index" v-for="(data, index) in pets">
          <b-card
            class="card col-auto text-center mb-3 hovereffect"
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
              <a class="info" href="#">帶我回家</a>
            </div>
            <!--<b-card-title>{{"可愛的" + data.animal_kind + data.animal_kind}}</b-card-title>-->
            <!--sex-->
            <div>
              <span class="detail-text --title"><font-awesome-icon :icon="['fas', 'paw']" /> 性別 </span>
              <span class="detail-text" v-if="data.animal_sex == 'M'">男生</span>
              <span class="detail-text" v-else-if="data.animal_sex == 'F'">女生</span>
              <span class="detail-text" v-else>未知</span>
            </div>
            <!--size-->
            <div>            
              <span class="detail-text --title"><font-awesome-icon :icon="['fas', 'paw']" /> 體型 </span>
              <span class="detail-text" v-if="data.animal_bodytype == 'SMALL'">小型</span>
              <span class="detail-text" v-else-if="data.animal_bodytype == 'MEDIUM'">中型</span>
              <span class="detail-text" v-else>大型</span>
            </div>
            <div>            
              <span class="detail-text --title"><font-awesome-icon :icon="['fas', 'paw']" /> 所在地 </span>
              <span class="detail-text"></span>
            </div>

            <!--<b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>
            <b-button href="#" variant="info">View pet</b-button>-->
          </b-card>
        </div>
      </b-card-group>
    </div>
  </b-container>
</template>
    
<script>
import axios from 'axios';

export default {
    methods: {
    
  },
  data() {
    return {
      pets: []
    };
  },
  mounted() {
    axios.get(
      "https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&$skip=0"
    )
      .then(response => {
      // JSON responses are automatically parsed.
      this.pets = response.data
    });
  },
}
</script>
<style>
@import "./card.css";
</style>