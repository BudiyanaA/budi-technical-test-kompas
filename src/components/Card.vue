<template>
  <div class="w-1/5 rounded overflow-hidden shadow-lg">
    <div class="px-4 py-2">
      <div class="font-semibold text-base mb-2 text-left">{{ title.substring(0, title.length-5) }}</div>
        <table class="table-auto text-sm w-full">
          <tbody>
            <tr v-for="entry in data" :key="entry">
              <td class="text-center border-b px-2 py-1">{{ entry.jam }}</td>
              <td class="text-left border-b px-2 py-1">{{ entry.nama }}</td>
              <td class="text-right border-b px-2 py-1">Rp {{ thousandFormatted(entry.pengeluaraan) }}</td>
            </tr>
            <tr>
              <td class="font-bold border-t-4 px-2 py-1 text-right" colspan="2">Total</td>
              <td class="font-bold text-right border-t-4 px-2 py-1">Rp {{ thousandFormatted(total) }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import Mixins from '../Mixins'

export default {
  mixins: [Mixins],
  props: {
    title: {
      type: String,
      default: () => (""),
    },
    total: {
      type: Number,
      default: () => (0),
    },
    data: {
      type: Array,
      default: () => ([]),
    }
  },
}
</script>