<script setup lang="ts">
import playerInfo from './components/player-info.vue'
import ScoreInfo from './components/score-info.vue';

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div class="flex gap-6">
    <playerInfo preset="Player 1"/>
    
    <ScoreInfo/>

    <playerInfo preset="Player 2"/>
  </div>
</template>