<template>
  <div id="app">
    <m-switch/>

    <br />
    <m-button >test button</m-button>

    <br>
    <m-select style="width:200px;" v-model="selectValue">
      <m-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></m-option>
    </m-select>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectValue:'',
      options: [
        {
          label: "test1",
          value: "test-value1"
        },
        {
          label: "test2",
          value: "test-value2"
        },
        {
          label: "test3",
          value: "test-value3"
        }
      ]
    };
  },
  watch:{
    selectValue:function(value){
      console.log(value);
    }
  }
};
</script>
