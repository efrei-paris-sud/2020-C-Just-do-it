<template>
  <div class="p-4 text-center" v-for="(device, index) in devices" :key="'device' + index">
    <div class="my-4">
      <span class="text-cyan-500 text-2xl">LUMINUS</span>
    </div>
    <div class="mt-12">
      <button @click="selectMode(device, 'color')" type="button" class="mx-1 py-1 px-2 rounded text-white" :class="{'bg-white text-indigo-500': device.mode !== 'color', 'bg-indigo-500': device.mode === 'color'}">Color</button>
      <button @click="selectMode(device, 'sound')" type="button" class="mx-1 py-1 px-2 rounded text-white" :class="{'bg-white text-indigo-500': device.mode !== 'sound', 'bg-indigo-500': device.mode === 'sound'}">Sound</button>
      <button @click="selectMode(device, 'gradient')" type="button" class="mx-1 py-1 px-2 rounded text-white" :class="{'bg-white text-indigo-500': device.mode !== 'gradient', 'bg-indigo-500': device.mode === 'gradient'}">Gradient</button>
      <button @click="selectMode(device, 'animated-gradient')" type="button" class="mx-1 py-1 px-2 rounded text-white" :class="{'bg-white text-indigo-500': device.mode !== 'animated-gradient', 'bg-indigo-500': device.mode === 'animated-gradient'}">Animated Gradient</button>
    </div>
    <div class="mt-12">
      <color-button v-for="(color, index) in colors" :key="'color_' + index" @click="selectFirstColor(device, color)" :color="color" :is-selected="device.firstColor === color && !device.rainbow"></color-button>
    </div>
    <div v-if="device.mode !== 'color'" class="mt-2">
      <color-button v-for="(color, index) in colors" :key="'color_' + index" @click="selectSecondColor(device, color)" :color="color" :is-selected="device.secondColor === color && !device.rainbow"></color-button>
    </div>
    <div v-if="device.mode === 'gradient' || device.mode === 'animated-gradient'">
      <div class="mt-4 text-gray-400">
        <span>or</span>
      </div>
      <div class="mt-4">
        <button @click="selectRainbow(device, !device.rainbow)" :class="{'bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500' : device.rainbow, 'bg-transparent text-purple-500 border border-purple-500' : !device.rainbow}" type="button" class="mx-1 py-1 px-2 rounded text-white focus:outline-none" >Rainbow</button>
      </div>
    </div>
    
    <div class="mt-12">
      <button @click="save(device)" type="button" class="mx-1 py-1 px-2 rounded bg-green-500 hover:bg-green-600 text-white focus:outline-none" >Send</button>
    </div>
  </div>
</template>

<script>
import chroma from 'chroma-js'
import colorButton from './components/colorButton.vue'

export default {
  components: { colorButton },
  name: 'App',
  data(){
    return {
      color: null,

      red: {red: 255, blue: 0, green: 0, name : 'red'},
      blue: {red: 0, blue: 255, green: 0, name: 'blue'},
      green: {red: 0, blue: 0, green: 255, name :'green'},
      pink: {red: 149, blue: 106, green: 0, name : 'pink'},
      orange: {red: 255, blue: 0, green: 140, name : 'orange'},

      colors: [
        {red: 255, blue: 0, green: 0, name : 'red'},
        {red: 0, blue: 255, green: 0, name: 'blue'},
        {red: 0, blue: 0, green: 255, name :'green'},
        {red: 149, blue: 106, green: 0, name : 'pink'},
        {red: 255, blue: 0, green: 140, name : 'orange'},
      ],

      loading: true,
      selectedMode: "sound",
      devices: [],
      url: 'https://luminus-efrei-default-rtdb.europe-west1.firebasedatabase.app',
    }
  },
  computed:{
    rainbow(){
      const colors = []
      for(const color of this.colors){
        colors.push([color.red, color.green, color.blue])
      }
      return colors
    }
  },
  created(){
    this.fetchDevices()
  },
  methods:{
    fetchDevices(){
      this.$http.get(this.url+ '/devices.json').then((response) => {
        for(const key of Object.keys(response.data)){
          const device = {
            id: key,
            ...response.data[key],
          }
          this.devices.push(device)
        }
        this.loading = false
      })
    },
    selectRainbow(device, rainbow){
      device.rainbow = rainbow
      this.computeGradient(device)
    },
    selectFirstColor(device, color){
      device.rainbow = false
      device.firstColor = color
      this.computeGradient(device)
    },
    selectSecondColor(device, color){
      device.rainbow = false
      device.secondColor = color
      this.computeGradient(device)
    },
    computeGradient(device){
      let scale = null
      if(device.rainbow){
        scale = chroma.scale(this.rainbow) 
      } else {
        const color1 = [device.firstColor.red, device.firstColor.green, device.firstColor.blue]
        const color2 = [device.secondColor.red, device.secondColor.green, device.secondColor.blue]
        scale = device.mode === 'animated-gradient' ? chroma.scale([color1, color2, color1]) : chroma.scale([color1, color2])
      }
      const gradient = []
      for (let index = 0; index < 60; index++) {
        const color = scale(index / 60).rgb()
        gradient.push(color)
      }
      device.gradient = gradient
    },
    selectMode(device, mode){
      device.mode = mode
      this.computeGradient(device)
    },
    save(device){
      this.$http.put(this.url + '/devices/' + device.id + '.json', device).then((response) => {})
    },
    onInput(data){
      console.log(data);
    }
  }
}
</script>
