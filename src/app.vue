<template>
  <div id="app">
    <m-switch/>
    <br />
    <m-button >test button</m-button>
    <br>
    <m-select style="width:200px;" v-model="selectValue">
      <m-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></m-option>
    </m-select>
    <br>
    <m-table :data="data" :columns="column">
    </m-table>
    <m-pagination :dataLimit=5 :pageOffset="pageOffset" :dataCount="dataCount" :pageNumberLimit=8 :afterSelectPage="selectPage" />
    <br>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectValue: "",
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
      ],
      column: [
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "性别",
          prop: "sex"
        },
        {
          label: "年龄",
          prop: "age"
        },
        {
          label: "描述",
          prop: "description"
        }
      ],
      data: [
        {
          "name":"marin",
          "sex":"female",
          "age":20,
          "description":"天才"
        },
        {
          "name":"dobby",
          "sex":"male",
          "age":18,
          "description":"傻x"
        },
        {
          "name":"andy",
          "sex":"male",
          "age":28,
          "description":"正常"
        }
      ]
    };
  },
  watch: {
    selectValue: function(value) {
      console.log(value);
    }
  },
  computed: {},
  methods: {}
};
</script>
