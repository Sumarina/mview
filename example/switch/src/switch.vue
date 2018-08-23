<template>
    <div>
        <label for="" class="pt-switch">
            <input type="checkbox" v-model="model" @change="isChange" :disabled="disabled">
            <span class="switch__slide">
                <span class="switch__slide--on">ON</span>
                <span class="switch__slide--off">OFF</span>
                <span class="switch__slider--bg"></span>
            </span>
        </label>
    </div>

</template>
<script>
import "./switch.scss";
export default {
  name: "ptSwitch",
  props: {
    size: String,
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: this.value
    };
  },
  methods: {
    isChange(event) {
      // const status=event.currentTarget.checked;
      // this.model=status;
      // console.log("this.model",this.model);
      console.log("event change...");
    }
  },
  created:function(){
    console.log("created",this.model);
  },
  mounted:function(){
      console.log("mounted",this.model);
  }
};
</script>
