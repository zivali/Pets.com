<template>
  <div class="container bg">
    <div class="row justify-content-center my-5">
      <b-row class="mtop">
        <b-row class="d-none d-md-block">
          <b-col>
            <b-button pill variant="outline-secondary" @click="$router.go(-1)">
              <font-awesome-icon :icon="['fas', 'angle-left']" />
              返回
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <!-- animal-image -->
          <div class="col-md-5 order-md-1 text-center mt-4">
            <b-card style="max-width: 50rem;">
              <b-img :src="this.pet[0].album_file" fluid-grow alt="Fluid-grow image"></b-img>
            </b-card>
          </div>
          <!-- animal description text -->
          <div class="col-md-3 order-md-2">
            <span class="h5">動物資訊</span>
            <b-list-group class="h6">
              <b-list-group-item variant="info">
                <font-awesome-icon :icon="['fas', 'tag']" />
                編號: {{animal_id}}
              </b-list-group-item>
              <b-list-group-item variant="info">
                <font-awesome-icon :icon="['fas', 'star']" />
                區域編號:
                <br />
                <br />
                {{animal_subid}}
              </b-list-group-item>
              <b-list-group-item variant="warning">
                <font-awesome-icon :icon="['fas', 'venus-mars']" />
                性別: {{animal_sex}}
              </b-list-group-item>
              <b-list-group-item variant="warning">
                <font-awesome-icon :icon="['fas', 'paw']" />
                體態:
                <br />
                <br />
                {{animal_bodytype}}, {{animal_age}}, {{animal_colour}}
              </b-list-group-item>
              <b-list-group-item variant="warning">
                <font-awesome-icon :icon="['fas', 'briefcase-medical']" />
                醫療:
                <br />
                <br />
                {{animal_sterilization}}, {{animal_bacterin}}
              </b-list-group-item>
            </b-list-group>
          </div>
          <!-- location description text -->
          <div class="col-md-4 order-md-3">
            <span class="h5">帶他回家</span>
            <b-list-group class="h6">
              <b-list-group-item variant="info">
                <font-awesome-icon :icon="['fas', 'search']" />
                發現地: {{animal_foundplace}}
              </b-list-group-item>
              <b-list-group-item variant="info">
                <font-awesome-icon :icon="['fas', 'thumbtack']" />
                收容所地址:
                <br />
                <br />
                {{shelter_address}}
              </b-list-group-item>
              <b-list-group-item variant="warning">
                <font-awesome-icon :icon="['fas', 'home']" />
                所屬收容所:
                {{shelter_name}}
                <br />
                <br />
                <b-embed
                  aspect="1by1"
                  frameborder="0"
                  style="border:0"
                  :src="google_map"
                  allowfullscreen
                ></b-embed>
              </b-list-group-item>
              <b-list-group-item variant="warning">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />
                收容所電話:
                <a id="shelterTel" href="tel" @click="telephone">{{shelter_tel}}</a>
              </b-list-group-item>
              <b-list-group-item variant="info">
                <font-awesome-icon :icon="['fas', 'comment-dots']" />
                備註:
                <br />
                <br />
                {{animal_remark}}
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-row>
      </b-row>
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
  },
  computed: {
    //animal detail
    animal_id: function() {
      return this.pet[0].animal_id;
    },
    animal_subid: function() {
      return this.pet[0].animal_subid;
    },
    animal_sex: function() {
      let sex = "";
      if (this.pet[0].animal_sex === "M") {
        sex = "公";
        return sex;
      } else if (this.pet[0].animal_sex === "F") {
        sex = "母";
        return sex;
      } else {
        sex = "未知";
        return sex;
      }
    },
    animal_bodytype: function() {
      let size = "";
      if (this.pet[0].animal_bodytype === "SMALL") {
        size = "小型";
        return size;
      } else if (this.pet[0].animal_bodytype === "MEDIUM") {
        size = "中型";
        return size;
      } else {
        size = "大型";
        return size;
      }
    },
    animal_age: function() {
      let age = "";
      if (this.pet[0].animal_age === "CHILD") {
        age = "幼年";
        return age;
      } else if (this.pet[0].animal_age === "ADULT") {
        age = "成年";
        return age;
      } else {
        age = "年齡未知";
        return age;
      }
    },
    animal_colour: function() {
      return this.pet[0].animal_colour;
    },
    animal_sterilization: function() {
      let sterilization = "";
      if (this.pet[0].animal_sterilization === "T") {
        sterilization = "已絕育";
        return sterilization;
      } else if (this.pet[0].animal_sterilization === "F") {
        sterilization = "未絕育";
        return sterilization;
      } else {
        sterilization = "不確定是否絕育";
        return sterilization;
      }
    },
    animal_bacterin: function() {
      let bacterin = "";
      if (this.pet[0].animal_bacterin === "T") {
        bacterin = "已施打狂犬疫苗";
        return bacterin;
      } else if (this.pet[0].animal_bacterin === "F") {
        bacterin = "未施打狂犬疫苗";
        return bacterin;
      } else {
        bacterin = "不確定是否施打狂犬疫苗";
        return bacterin;
      }
    },
    shelter_name: function() {
      return this.pet[0].shelter_name;
    },
    shelter_address: function() {
      return this.pet[0].shelter_address;
    },
    shelter_tel: function() {
      return this.pet[0].shelter_tel;
    },
    animal_place: function() {
      return this.pet[0].animal_place;
    },
    animal_foundplace: function() {
      return this.pet[0].animal_foundplace;
    },
    animal_remark: function() {
      return this.pet[0].animal_remark;
    },
    google_map: function() {
      let map_url =
        "https://www.google.com/maps/embed/v1/place?key=" + process.env.VUE_APP_API + "&q=";

      return map_url + this.shelter_name;
    }
  },
  methods: {
    telephone() {
      //call shelter
      let ele = document.getElementById("shelterTel");
      ele.href = "tel:" + this.pet[0].shelter_tel;
      return ele;
      // eslint-disable-next-line
      console.log(ele.href);
    }
  }
};
</script>
<style>
@import "../css/SingleAnimal.scss";
</style>