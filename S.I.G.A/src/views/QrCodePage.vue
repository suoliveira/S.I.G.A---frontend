<template>
  <div class="container">
    <input v-model="text" placeholder="Enter text" />
    <button @click="generateQRCode">Generate QR Code</button>
    <canvas ref="qrcodeCanvas"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    generateQRCode() {
      const canvas = this.$refs.qrcodeCanvas
      QRCode.toCanvas(canvas, this.text, {width: 400, height: 400},function (error) {
        if (error) console.error(error)
        console.log('QR code generated!')
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #060606;

}

.qrcode {
  border: 1px solid #000;
}

</style>
