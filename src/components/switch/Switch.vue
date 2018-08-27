<template>
    <label class="m-switch">
        <input type="checkbox"
               ref="switchIpt"
               v-model="model"
               :disabled="disabled"

               @change="handleChange"
        >

        <span class="m-switch__slider"
              ref="switchSlider"
              :class="model ? 'is-on' : 'is-off'"
        >
            <span class="m-switch__slider--on">ON</span>
            <span class="m-switch__slider--off">OFF</span>
            <span class="m-switch__slider--bg"></span>
        </span>
    </label>
</template>

<script>
import './switch.css';
export default {
  name: "mSwitch",

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: Boolean //设置初始状态, 通过 v-model 或者 :value 传递
  },

  data() {
    return {
      model: this.value
    };
  },

  methods: {
    /**
     * change事件
     * @param event
     */
    handleChange(event) {
      const status = event.currentTarget.checked;
      this.model = status;
      this.$emit("input", status);
      this.$emit("change", status);
    }
  }
};
</script>


