
<template>
  <div class="input-wrap">
    <h1>{{value}}</h1>
    <input class="input" @input="jump" @change="jump" type="range" v-model="value" max="1000"/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      value: 0,
    };
  },
  methods: {
    jump: function (event) {
      console.log(event.type);
      console.log(event.target.value);
      this.value = event.target.value;
    },
  },
};
</script>

<style >
.input-wrap{
  width: 500px;
  margin: 0 auto;
}
.input{
  width: 100%;
  cursor: pointer;
}
</style>
