
# select 选择框
----
### 基础用法
m-switch 支持v-model

<div class="demo-block">
 <m-switch v-model="sValue"></m-switch>
<script>
    export default {
        data(){
            return {
                sValue:''
            }
        },
        watch:{
            sValue:function(value){
                console.log(value);
            }
        }
    }
</script>
</div>

::: demo
```html

<div class="demo-block">
     <m-switch v-model="sValue"></m-switch>
</div>

<script>
  export default {
    data() {
        return {
        sValue:''
        }
        
    },
    watch:{
        sValue:function(value){
        console.log(value);
        }
    }
};
</script>
```
:::

