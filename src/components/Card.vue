<template>
  <div class="w-1/5 rounded overflow-hidden shadow-lg">
    <div class="px-4 py-2">
      <div class="font-semibold text-base mb-2 text-left">18 Februari</div>
        <table class="table-auto text-sm">
          <tbody>
            <tr v-for="index in 6" :key="index">
              <td class="text-center border-b px-2 py-1">03.15</td>
              <td class="text-left border-b px-2 py-1">Ayam Tangkap</td>
              <td class="text-right border-b px-2 py-1">Rp 77.249</td>
            </tr>
            <tr>
              <td class="font-bold border-t-4 px-2 py-1 text-right" colspan="2">Total</td>
              <td class="font-bold text-right border-t-4 px-2 py-1">Rp 77.249</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>