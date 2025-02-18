<template>
  <div class="flex outline outline-zinc-500 ps-2 py-1 rounded-md w-fit">
    <input type="number" class="focus:outline-0 w-5" v-model="modelValue">
    <div class="flex flex-col scale-75">
        <v-icon name="fa-chevron-up" class="hover:cursor-pointer hover:text-zinc-400 -mt-2 m-px" @click="modelValue++"/>

        <v-icon name="fa-chevron-down" class="hover:cursor-pointer hover:text-zinc-400 -mb-2 m-px" @click="modelValue--"/>
    
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
    modelValue: Number,
})


const modelValue = ref(0)
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
   display: none;
}
</style>