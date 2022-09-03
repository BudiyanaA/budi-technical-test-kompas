<template>
  <Transition name="fade">
    <div 
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-75"
      @click.self="close"
    >
      <form class="relative w-full max-w-sm bg-white shadow-lg rounded-lg p-4 text-left">
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
          <span class="text-xs text-red-700" id="nameHelp"></span>
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

          <span class="text-xs text-red-700" id="priceHelp"></span>
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
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
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
      this.$emit('close');
    }
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