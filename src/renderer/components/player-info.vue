<template>
  <div class="flex flex-col gap-1 w-82">
    <div class="flex gap-2" :class="props.direction">
      <button class="my-auto opacity-75 hover:opacity-100">
        <v-icon class="size-6 mt-0.5" name="fa-ellipsis-h"/>
      </button>
      <h2 class="font-bold text-center w-full">{{ props.preset }}</h2>
      <div class="flex gap-2">
        <input type="checkbox">
        <h3>[L]</h3>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div class="flex gap-1">
        <input type="text" placeholder="Prefix" class="border border-zinc-500 p-1 ps-2 rounded-md grow w-15 focus:outline-none">
        <input type="text" placeholder="Gamertag" class="border border-zinc-500 p-1 ps-2 rounded-md grow w-39 focus:outline-none">
      </div>
      
    </div>
    <div>
      <CustomCombobox :options="options" :modelValue="pronouns" placeholder="Pronouns"/>
    </div>


    <h2 class="font-bold text-center mt-2">Character</h2>
    <div class="grid grid-cols-2 gap-1">
      <CustomCombobox :options="options" :modelValue="pronouns" placeholder="Character"/>
      <CustomCombobox :options="options" :modelValue="pronouns" placeholder="Skin"/>
    </div>

    <h2 class="font-bold text-center mt-2">Misc.</h2>
    <div class="flex justify-between">
      <h3 class="font-bold text-sm w-10">Port</h3>
        <div class="flex justify-center gap-5 mt-1">
          <input type="checkbox" class="scale-150">
          <input type="checkbox" class="scale-150">
          <input type="checkbox" class="scale-150">
          <input type="checkbox" class="scale-150">
        </div>
      <h3 class="w-10"></h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import CustomCombobox from './interface/custom-combobox.vue'

const props = defineProps({
  preset: String,
  direction: String,
  player: String
})

const pronouns = ref('')
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple', 'りんご']


</script>

<style>

</style>