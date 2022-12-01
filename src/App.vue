<script setup lang="ts">
import { reactive } from 'vue'
import task1 from './task1'

const answers = reactive([task1])
</script>

<template>
  <ol reversed>
    <li
      v-for="(answer, index) in answers"
      :key="index"
    >
      {{ answer }}
    </li>
  </ol>
</template>
