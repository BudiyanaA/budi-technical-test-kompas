<template>
  <h1 class="text-2xl font-semibold">Diari Jajan Februari 2021</h1>
  <h2 class="text-lg">Pengeluaran Bulan Ini Rp 5.605.475</h2>
  <button 
    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
    @click="showModal = true"
  >
    Tambah Item
  </button>
  
  <div class="flex flex-wrap my-8 gap-4 justify-center">
    <Card v-for="index in 18" :key="index" />
  </div>

  <Modal :showing="showModal" @close="showModal = false" />
</template>

<script>
import Card from './Card.vue'
import Modal from './Modal.vue'

export default {
  name: 'Home',
  components: {
    Card,
    Modal,
  },
  data: function () {
    return {
      showModal: false
    }
  }
}
</script>