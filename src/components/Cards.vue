  <template>
      <b-container>
        <div>
          <b-row>
            <div v-bind:key="data.index" v-for="data in pets">
              <b-col l="4">
                <b-card class="col-3 text-center " 
                  v-bind:title="data.animal_subid"
                  v-bind:img-src="data.album_file" alt="Card image cap" 
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  >
                  <!--<b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>-->
                  <b-button href="#" variant="info">View pet</b-button>
                </b-card>
              </b-col>
            </div>
          </b-row>
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
        fetch('https://cors-anywhere.herokuapp.com/http://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL')
            .then(response => response.json())
            .then((data) => {
                this.pets = data;
            })
        },
    };
    </script>
    <style>
    @import './img.css';
    </style>