<script setup lang="ts">
import playerInfo from './components/player-info.vue'
import ScoreInfo from './components/score-info.vue';

//window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div class="overflow-hidden">
    <div class="flex gap-6 p-1 pb-6">
      <playerInfo preset="Player 1"/>
      
      <ScoreInfo/>

      <playerInfo preset="Player 2"/>
    </div>   
  </div>
    
  
</template>

<style>
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background: #52525b; 
  border-radius: 10px;
}
</style>