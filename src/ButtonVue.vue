<template>
  <button @click="contador">Click{{ count }}</button>
</template>
<script>
export default {
  name: "ButtonVue",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
};
</script>
