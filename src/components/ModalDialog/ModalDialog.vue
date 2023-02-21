<template>
  <div>
    <div class="modal-dialog">
      <div class="modal title">
        <p>침수위험 알림톡<br />신청 정보 입력</p>
        <img src="@/assets/image/ico-close.svg" @click="modalDailogClose" />
      </div>
      <div class="inputArea">
        <div class="name">
          <p>이름</p>
          <input type="text" v-model="name" ref="name" />
        </div>
        <div class="number">
          <p>휴대폰번호{{ phoneNumber.toString().length }}</p>
          <input type="number" v-model="phoneNumber" ref="phoneNumber" />
        </div>

        <button class="dialog-submit" @click="alertDialogOpen">신청</button>
      </div>
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
      name: "",
      phoneNumber: "",
    };
  },
  mounted() {},
  created() {},
  methods: {
    modalDailogClose() {
      this.$emit("modalDailogClose");
    },
    alertDialogOpen() {
      if (!this.name) {
        alert("이름을 입력해 주세요");
        this.$refs.name.focus();
        return false;
      }
      if (this.phoneNumber.toString().length < 10) {
        alert("휴대폰 번호를 정확히 입력해 주세요");
        this.$refs.phoneNumber.focus();
        return false;
      }
      this.alertDialog = true;
      this.$emit("alertDialogOpen");
    },
    alertDialogClose() {
      this.alertDialog = false;
    },
  },
};
</script>
<style src="./ModalDialog.scss" lang="scss" />
