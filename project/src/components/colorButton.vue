<template>
      <button type="button" :class="getStyle()"  class="focus:outline-none capitalize mx-1 py-1 px-2 rounded text-white">{{color.name}}</button>
</template>

<script>
export default {
  name: 'colorButton',
  props:{
      color: {
          type: Object,
          required: true,
      },
      isSelected: {
          type: Boolean,
          default: false,
      }
  },
  methods:{
      getStyle(){
          if(this.isSelected){
              return 'bg-' + this.color.name + '-500 border border-transparent focus-ring focus:ring-' + this.color.name + '-500 focus:ring-offset-white focus:ring-offset-2'
          } else {
              return 'bg-white text-' + this.color.name + '-500 border border-' + this.color.name + '-500 focus-ring focus:ring-' + this.color.name + '-500 focus:ring-offset-white focus:ring-offset-2'
          }
      }
  }
}
</script>
