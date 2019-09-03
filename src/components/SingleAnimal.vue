<template>
  <div class="container bg">
    <div class="row justify-content-center my-5">
      <b-row>
        <div></div>
        <!-- animal-image -->
        <div class="col-md-6 order-md-1 text-center">
          <!-- <img :src="pet[0].album_file" class="rounded shadow" alt />-->
          <b-card
            class="mt-4 single"
            :img-src="pet[0].album_file"
            imgtop
            style="max-width: 50rem;"
          >
          </b-card>
        </div>
        <!-- animal description text -->
        <div class="col-md-3 order-md-2 mt-md-0">
          <span class="h5">動物資訊</span>
          <b-list-group class="h6">
            <b-list-group-item variant="warning">編號: {{animal_id}}</b-list-group-item>
            <b-list-group-item variant="success">區域編號: {{animal_subid}}</b-list-group-item>
            <b-list-group-item variant="danger">性別: {{animal_sex}}</b-list-group-item>
            <b-list-group-item variant="info">體型: {{animal_bodytype}}</b-list-group-item>
            <b-list-group-item variant="warning">年齡: {{animal_age}}</b-list-group-item>
            <b-list-group-item variant="success">毛色: {{animal_colour}}</b-list-group-item>
            <b-list-group-item variant="danger">是否絕育: {{animal_sterilization}}</b-list-group-item>
            <b-list-group-item variant="info">是否施打狂犬病疫苗: {{animal_bacterin}}</b-list-group-item>
            <b-list-group-item variant="warning">發現地: {{animal_foundplace}}</b-list-group-item>
          </b-list-group>
        </div>
        <!-- location description text -->
        <div class="col-md-3 order-md-3 mt-md-0">
          <span class="h5">帶他回家</span>
          <b-list-group class="h6">
            <b-list-group-item variant="warning">所在地: {{animal_place}}</b-list-group-item>
            <b-list-group-item variant="success">所屬收容所: {{shelter_name}}</b-list-group-item>
            <b-list-group-item variant="danger">收容所地址: {{shelter_address}}</b-list-group-item>
            <b-list-group-item variant="info">收容所電話: {{shelter_tel}}</b-list-group-item>
            <b-list-group-item variant="warning">備註: {{animal_remark}}</b-list-group-item>
          </b-list-group>
        </div>
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
        age = "未知";
        return age;
      }
    },
    animal_colour: function() {
      return this.pet[0].animal_colour;
    },
    animal_sterilization: function() {
      let sterilization = "";
      if (this.pet[0].animal_sterilization === "T") {
        sterilization = "是";
        return sterilization;
      } else if (this.pet[0].animal_sterilization === "F") {
        sterilization = "否";
        return sterilization;
      } else {
        sterilization = "未知";
        return sterilization;
      }
    },
    animal_bacterin: function() {
      let bacterin = "";
      if (this.pet[0].animal_bacterin === "T") {
        bacterin = "是";
        return bacterin;
      } else if (this.pet[0].animal_bacterin === "F") {
        bacterin = "否";
        return bacterin;
      } else {
        bacterin = "未知";
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
    }
  }
};
</script>
<style>
@import "./css/SingleAnimal.css";
</style>