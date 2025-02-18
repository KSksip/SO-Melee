<template>
  <div class="flex flex-col gap-2">
    <h2 class="font-bold text-center">Match</h2>
      <div class="w-45">
        <CustomCombobox/>
      </div>

    <div class="flex justify-center gap-2">
      <h2 class="font-bold my-auto">Best of </h2>
      <CustomNumberInput/>
    </div>
    

    <h2 class="font-bold text-center">Score</h2>
    <div class="flex justify-center gap-5">
      <CustomNumberInput/>
      <CustomNumberInput/>
    </div>
    <button class="font-bold bg-zinc-800 outline outline-zinc-500 rounded-md w-fit px-2 p-1 mx-auto mt-2 hover:bg-zinc-700 hover:cursor-pointer">Reset <v-icon name="hi-refresh" /></button>
  </div>
</template>

<script lang="ts" setup>
import CustomCombobox from './interface/custom-combobox.vue'
import CustomNumberInput from './interface/custom-number-input.vue'
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
   opacity: 1;
   outline: red ;
}
</style>