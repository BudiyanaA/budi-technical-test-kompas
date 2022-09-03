<template>
  <Transition name="fade">
    <div 
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-75"
      @click.self="close"
    >
      <div class="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-4 text-left">
        <div class="my-4 font-bold text-lg">
          Tambah Entri
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama
          </label>
          <input
            id="name"
            class="shadow w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nama"
            aria-describedby="nameHelp"
            v-model="name"
          />
          <span class="text-xs text-red-700" id="nameHelp">
            {{ error.name }}
          </span>
        </div>

        <div class="mb-6">
          <label
            for="price"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Harga
          </label>

          <input
            aria-describedby="priceHelp"
            v-model="price"

            class="shadow  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Harga"
          />

          <span class="text-xs text-red-700" id="priceHelp">
            {{ error.price }}
          </span>
        </div>

        <div class="flex items-center gap-2 justify-end">
          <button
            aria-label="close"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click.prevent="close"
          >
            Batal
          </button>
          <button
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="store"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  data: function () {
    return {
      error: {
        name: '',
        price: '',
      },
      name: '',
      price: null,
    }
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }
      
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  },
  methods: {
    close() {
      this.name = ''
      this.price = null
      this.$emit('close');
    },
    async store() {
      this.error.name = ''
      this.error.price = ''

      try {
        if (!this.name) {
          this.error.name = 'Nama harus diisi'
          return
        }

        if (!this.price) {
          this.error.price = 'Harga harus diisi'
          return
        }

        const entry = await axios.post(
          "http://localhost:3000/detail", 
          {
            id: Date.now(),
            jam: new Date().getHours() + ':' + new Date().getMinutes(),
            tanggal: '19 Februari 2021',
            nama: this.name,
            pengeluaraan : this.price
          }
        );

        console.log(entry)
        this.$emit('submit');
        this.close()
      } catch(e) {
        console.log(e);
        alert(e)
      }
    },
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>