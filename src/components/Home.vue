<template>
  <h1 class="text-2xl font-semibold">Diari Jajan Februari 2021</h1>
  <h2 class="text-lg">Pengeluaran Bulan Ini Rp 5.605.475</h2>
  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4">
    Tambah Item
  </button>
  <div class="flex flex-wrap my-8 gap-4 justify-center">
    <Card v-for="index in 8" :key="index" />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Home',
  components: {
    Card,
  }
}
</script>