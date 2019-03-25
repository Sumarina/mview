<template>
  <div class="m-table">
    <div class="m-table__content">
        <div class="m-table__content--column"   v-for="(field,fieldIndex) in fields" :key="fieldIndex">
            <div class="field" :style="field.theadStyle">{{field.label}}</div>
            <div class="tbody">
              <div :style="field.style" v-for="(rows,rowIndex) in data" :key="rowIndex" class="tbody-row">
                {{rows[field.prop]}}
              </div>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import "./Table.css";
export default {
  name: "MTable",
  props: {
    data: {
      type: Array,
      default: []
    },
    fields: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      body: this.data
    };
  }
};
</script>
