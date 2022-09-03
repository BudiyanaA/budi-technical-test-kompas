<template>
  <h1 class="text-2xl font-semibold">Diari Jajan Februari 2021</h1>
  <h2 class="text-lg">Pengeluaran Bulan Ini Rp {{ thousandFormatted(outcomeSum(items)) }}</h2>
  <button 
    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
    @click="showModal = true"
  >
    Tambah Item
  </button>
  <div class="flex flex-wrap my-8 gap-4 justify-center">
    <Card 
      v-for="group in Object.keys(groupBy(items, 'tanggal'))" 
      :key="group" 
      :title="group"
      :total="outcomeSum(groupBy(items, 'tanggal')[group])"
      :data="groupBy(items, 'tanggal')[group]"
    />
  </div>

  <Modal :showing="showModal" @close="showModal = false" />
</template>

<script>
import Card from './Card.vue'
import Modal from './Modal.vue'
import axios from 'axios'
import Mixins from '../Mixins'

export default {
  name: 'Home',
  mixins: [Mixins],
  components: {
    Card,
    Modal,
  },
  data: function () {
    return {
      showModal: false,
      items: [],
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/detail')
      .then(response => (
        this.items = response.data
      ))
  },
  methods: {
    groupBy: function (data, key) {
      return data.reduce((item, x) => {
        (item[x[key]] = item[x[key]] || []).push(x);
        return item;
      }, {});
    },
    outcomeSum: function (data) {
      const total = data.reduce((accumulator, object) => {
        return accumulator + object.pengeluaraan;
      }, 0);
      return total;
    }
  }
}
</script>