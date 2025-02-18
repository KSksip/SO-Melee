<template>
    <div class="relative w-full" @mouseleave="isFocused = false">
        <div class="flex whitespace-nowrap outline outline-zinc-500 p-1 ps-2 rounded-t-md w-full min-w-5" :class="isFocused ? '' : 'rounded-b-md'">
            <input v-model="modeledVal" :placeholder="props.placeholder" type="text" class="focus:outline-0 min-w-1 grow" @focus="isFocused = true">
            <v-icon name="fa-chevron-down" class="size-5 translate-y-0.5 hover:cursor-pointer hover:text-zinc-400 grow-0" @click="isFocused = !isFocused"/>
        </div>
        
        <div class="flex flex-col bg-zinc-800 mt-px rounded-b-md outline outline-zinc-600 absolute z-20 w-full" v-if="isFocused && filteredOptions?.length">
        <!-- style this -->
            <button v-for="option in filteredOptions"  @click="selectOption(option); isFocused = false" class="w-full text-start hover:bg-zinc-900 hover:cursor-pointer p-1">
                <span>
                 {{ option }}
                </span>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'


const props = defineProps({
    options: Array,
    placeholder: String,
    modelValue: String,
})

const filteredOptions = computed(() => {
    return props.options?.filter((opt: any) => opt.toLowerCase().includes(modeledVal.value.toLowerCase()))
})

const isFocused = ref(false)
const modeledVal = ref('')


function selectOption(val:any){
    modeledVal.value = val
}
</script>

<style>

</style>