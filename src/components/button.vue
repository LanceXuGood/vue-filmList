<template>
  <div class="button-component">
    <slot name="buttons"></slot>
    <br>
    <template v-if="!$slots.buttons">
      <button>1</button>
      <button>2</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {},

  data() {
    return {
      filmData: {}
    };
  },
  methods: {

  },
  beforeMount() {},
  mounted() {}
};
</script>
