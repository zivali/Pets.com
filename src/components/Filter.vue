<template>
<b-container>
  <div>
    <b-row>
      <b-col md="2">
        <div>體型</div>
        <b-form-select v-model="sizeSelected" :options="sizeOptions" :change="filter"></b-form-select>
      </b-col>
      <b-col md="2">
        <div>性別</div>
        <b-form-select v-model="sexSelected" :options="sexOptions"></b-form-select>
      </b-col>
      <b-col md="2">
        <div>年齡</div>
        <b-form-select v-model="ageSelected" :options="ageOptions"></b-form-select>
      </b-col>
      <b-col md="2">
        <div>所在地</div>
        <b-form-select v-model="locationSelected" :options="locationOptions"></b-form-select>
      </b-col>
      <b-col md="2">
        <div>絕育</div>
        <b-form-select v-model="sterilizationSelected" :options="sterilizationOptions"></b-form-select>
      </b-col>
      <b-col md="2">
        <div>施打狂犬疫苗</div>
        <b-form-select v-model="bacterinSelected" :options="bacterinOptions"></b-form-select>
      </b-col>
    </b-row>
  </div>
  </b-container>
</template>
<script>

export default {
  data(){
    return{
      sizeSelected: null,
      sexSelected: null,
      ageSelected: null,
      locationSelected: null,
      sterilizationSelected: null,
      bacterinSelected: null,
      sizeOptions:[
        { value: null, text: '全部',  param: '' },
        { value: 'SMALL', text: '小型', param: '&animal_bodytype=SMALL'},
        { value: 'MEDIUM', text: '中型', param: '&animal_bodytype=MEDIUM'},
        { value: 'BIG', text: '大型', param: '&animal_bodytype=BIG'},
      ],
      sexOptions:[
        { value: null, text: '全部', param: '' },
        { value: 'F', text: '女生', param: '&animal_sex=F'},
        { value: 'M', text: '男生', param: '&animal_sex=M'}
      ],
      ageOptions:[
        { value: null, text: '全部', param: '' },
        { value: 'CHILD', text: '幼年', param: '&animal_age=CHILD' },
        { value: 'ADULT', text: '成年', param: '&animal_age=ADULT' },
      ],
      locationId: [null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      locationArr:[
        '全台', '臺北市', '新北市', '基隆市', '宜蘭縣', '桃園縣', '新竹縣', '新竹市', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'
      ],
      sterilizationOptions:[
        { value: null, text: '全部', param: '' },
        { value: 'T', text: '是', param: '&animal_sterilization=T' },
        { value: 'F', text: '否', param: '&animal_sterilization=F' },
      ],
      bacterinOptions:[
        { value: null, text: '全部', param: '' },
        { value: 'T', text: '是', param: '&animal_bacterin=T' },
        { value: 'F', text: '否', param: '&animal_bacterin=F' },
      ]
    }
  },
  computed: {
    locationParam(){
      let location = ['', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
      for (var j=0; j<location.length; j++){
        if (typeof location[j] == 'number'){
          location[j] = '&animal_area_pkid='+location[j]
        }
      }
      return location;
    },
    locationOptions(){
      let place =[];
      for(var i=0; i<this.locationId.length; i++){
        place.push({ value: this.locationId[i], text: this.locationArr[i], param: this.locationParam[i]})
      }
      return place;
    },
    filter(){
      let params = '';
      //size
      for (var x=0; x<this.sizeOptions.length; x++){
        if (this.sizeSelected === this.sizeOptions[x].value){
          params = params.concat(this.sizeOptions[x].param);
        }
      }
      //sex
      for (var y=0; y<this.sexOptions.length; y++){
        if (this.sexSelected === this.sexOptions[y].value){
          params = params.concat(this.sexOptions[y].param);
        }
      }
      //age
      for (var z=0; z<this.ageOptions.length; z++){
        if (this.ageSelected === this.ageOptions[z].value){
          params = params.concat(this.ageOptions[z].param);
        }
      }
      //location
      for (var a=0; a<this.locationOptions.length; a++){
        if (this.locationSelected === this.locationOptions[a].value){
          params = params.concat(this.locationOptions[a].param);
        }
      }
      //sterilization
      for (var b=0; b<this.sterilizationOptions.length; b++){
        if (this.sterilizationSelected === this.sterilizationOptions[b].value){
          params = params.concat(this.sterilizationOptions[b].param);
        }
      }
      //bacterin
      for (var c=0; c<this.bacterinOptions.length; c++){
        if (this.bacterinSelected === this.bacterinOptions[c].value){
          params = params.concat(this.bacterinOptions[c].param);
        }
      }
      this.$emit('filterParam', params);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../css/Filter.scss";
</style>