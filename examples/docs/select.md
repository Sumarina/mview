
# select 选择框
----
### 基础用法
由`m-select`定义m-select标签，使用m-option设置子标签。

<div class="demo-block">
 <m-select style="width:200px;" v-model="selectValue">
      <m-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></m-option>
    </m-select>
<script>
  export default {
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
</div>

::: demo
```html

  <m-select style="width:200px;" v-model="selectValue">
      <m-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></m-option>
  </m-select>

<script>
 export default {
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
```
:::

