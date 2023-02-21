<template>
  <div class="alert-dialog" @click="alertDialogClose()">
    <div class="modal title">
      <p>신청되었습니다.</p>
      <em>이 창을 다시 누르면 팝업이 사라집니다.</em>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      // test: 1234,
    };
  },
  mounted() {},
  created() {},
  methods: {
    alertDialogClose() {
      this.$emit("alertDialogClose");
    },
  },
};
</script>
<style src="./AlertDialog.scss" lang="scss" />
