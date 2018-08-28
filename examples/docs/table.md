# table

---

### 基础用法

<div class="demo-block">
     <m-table :data="data" :fields="column">
    </m-table>
<script>
    export default {
        data(){
            return {
                column: [
        {
          label: "姓名",
          prop: "name",
          style:{
            color:"red"
          },
          theadStyle:{
            color:"green"
          }
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
        },{
          label: "描述1",
          prop: "description1"
        },{
          label: "描述2",
          prop: "description2"
        }
      ],
      data: [
        {
          "name":"marin",
          "sex":"female",
          "age":20,
          "description":"天才",
          "description1":"天才",
          "description2":"天才"
        },
        {
          "name":"dobby",
          "sex":"male",
          "age":18,
          "description":"傻x",
          "description1":"天才",
          "description2":"天才"
        },
        {
          "name":"andy",
          "sex":"male",
          "age":28,
          "description":"正常",
          "description1":"天才",
          "description2":"天才"
        }
      ]
            }
        }
        // watch:{
        //     sValue:function(value){
        //         console.log(value);
        //     }
        // }
    }
</script>
</div>

::: demo

```html
<div class="demo-block">
<m-table :data="data" :fields="column" >
    </m-table></div>

<script>
  export default {
    data() {
        return {
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
        }

    }
    // watch:{
    //     sValue:function(value){
    //     console.log(value);
    //     }
    // }
};
</script>
```

:::
