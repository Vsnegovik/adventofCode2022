<script setup lang="ts">
import { reactive } from 'vue'
import task1 from './task1'
import task2 from './task2'
import task3 from './task3'
import task4 from './task4'
import task5 from './task5'

const answers = reactive([task5, task4, task3, task2, task1])
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
