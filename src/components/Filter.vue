<template>
<b-container>
  <div>
    <b-row class="ml-4">
      <b-col md="2">
        <div>體型</div>
        <b-form-select v-model="sizeSelected" :options="sizeOptions"></b-form-select>
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
        <b-form-select v-model="locationSelected" :options="location"></b-form-select>
      </b-col>
    </b-row>
    <!--Cards-->
    <router-view />
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
      sizeOptions:[
        { value: null, text: '全部' },
        { value: 'SMALL', text: '小型' },
        { value: 'MEDIUM', text: '中型' },
        { value: 'BIG', text: '大型' },
      ],
      sexOptions:[
        { value: null, text: '全部' },
        { value: 'F', text: '女生'},
        { value: 'M', text: '男生'}
      ],
      ageOptions:[
        { value: null, text: '全部' },
        { value: 'CHILD', text: '幼年' },
        { value: 'ADULT', text: '成年' },
      ],
      locationId: [null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      locationArr:[
        '全台', '臺北市', '新北市', '基隆市', '宜蘭縣', '桃園縣', '新竹縣', '新竹市', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'
      ],
    }
  },
  computed: {
    location(){
      let place =[];
      for(var i=0; i<this.locationId.length; i++){
        place.push({value: this.locationId[i], text: this.locationArr[i]})
      }
      return place;
    }
  }
}
</script>

<style>

</style>