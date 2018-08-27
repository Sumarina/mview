<template>
    <div class="m-select" ref="m_select">
        <div class="m-select__selection" @click="handleSelect">
            <span class="m-select__defaultvalue" v-if="!current">{{defaultValue}} </span>
            <span class="m-select__selectedvalue" v-if="current">{{current.label}}</span>    
        </div>  
        <div class="m-select__dropdown" v-show="showDropdown" :style="dropdownStyles">
           <ul class="m-select__dropdownlist">
                <slot></slot>
           </ul>
        </div>  
    </div>
</template>
<script>
export default {
  name: "MSelect",
  data() {
    return {
      showDropdown: false,
      current: null,
      dropdownStyles: null
    };
  },

  props: {
    defaultValue: {
      type: String,
      default: "请选择"
    },
    value:String||Object||Number
  },

  methods: {
    handleOptionClick($event) {
      this.$children.length > 0 &&
        this.$children.forEach(c => c.clearSelected());

      this.showDropdown = false;

      this.current = { ...$event };

      let value = $event.value;

      this.$emit("input", value);
      this.$emit("change", value);
    },
    handleSelect() {
      let dom = this.$refs.m_select.querySelector(".m-select__selection");
      let rect = dom.getBoundingClientRect();

      this.dropdownStyles = {
        position: "absolute",
        top: `${rect.height}px`,
        "transform-origin": "center top 0px",
        width: `${rect.width}px`
      };

      this.showDropdown = !this.showDropdown;
    },

    initCurrent(){
        console.log(this.$children[0]);
    }
  },
  created(){
    //   this.initCurrent();
    console.log('init select');
  }
};
</script>

<style>
.m-select {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  color: #000000;
  min-width: 60px;
  font-size: 14px;
  line-height: normal;
  position: relative;
}
.m-select__dropdown {
  /* position: absolute; */
  /* top: 50px; */
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #fff;
  box-sizing: border-box;
  position: absolute;
  z-index: 900;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.m-select__selection {
  display: block;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d7dde4;
}
.m-select__defaultvalue , .m-select__selectedvalue {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 24px;
}
.m-select__selection:hover {
  border-radius: 4px;
  border: 1px solid #b2cf07;
}

.m-select__dropdownlist {
  padding-left: 0 !important;
  list-style-type: none;
  margin: 0;
}
</style>


