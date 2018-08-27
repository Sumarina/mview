<template>
    <li @click="handleClick" :class="classnames">{{label}}</li>    
</template>
<script>
export default {
  name: "MOption",
  data() {
    return {
      isSelected: false
    };
  },
  computed: {
    classnames() {
      return [
        "m-select__item",
        this.isSelected ? "m-select__item--selected" : ""
      ];
    }
  },
  methods: {
    handleClick() {
      this.$parent.handleOptionClick({
        label: this.label,
        value: this.value
      });

      this.isSelected = true;
    },
    clearSelected() {
      this.isSelected = false;
    }
  },

  props: {
    label: String,
    value: String | Number | Object
  },
  created() {
    this.isSelected = this.$parent.value == this.value;
    if (this.isSelected) {
      this.$parent.current = {
        label: this.label,
        value: this.value
      };
    }
  }
};
</script>

<style>
.m-select__item {
  margin: 0;
  padding: 7px 16px;
  clear: both;
  color: #657180;
  font-size: 12px !important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  -webkit-transition: background 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;
}

.m-select__item:hover {
  background: #f3f3f3;
}

.m-select__item--selected,
.m-select__item--selected:hover {
  color: #fff;
  background: #b2cf07;
}
</style>
