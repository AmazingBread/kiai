<template>
  <div>
    <main>
      <img src="@/assets/image/gijang-logo.png" class="gijangLogo" />
      <img src="@/assets/image/gijang_map.png" class="gijangMap" />
      <div class="text">
        <h3>
          <p class="blue in-block">기장군</p>
          과 함께하는<br />침수대응 기술 개발
        </h3>
        <div class="tag">
          <p>#<em class="blue">집중</em>호우</p>
          <p>#<em class="blue">침수</em>위험정보</p>
          <p>#<em class="blue">홍수</em>방어</p>
          <p>#<em class="blue"></em>IoT센서</p>
          <p>#<em class="blue"></em>선세대응</p>
        </div>
      </div>
      <img src="@/assets/image/main-vector.svg" class="city" />
    </main>
    <MainNav @modalDailogOpen="modalDailogOpen()" />
    <!-- 알림톡 신청 모달 -->
    <ModalDialog
      v-if="modalDailog"
      @alertDialogOpen="
        {
          alertDialogOpen(), modalDailogClose();
        }
      "
      @modalDailogClose="modalDailogClose()"
    />
    <AlertDialog v-if="alertDialog" @alertDialogClose="alertDialogClose()" />
    <!-- 신청 완료 alert -->
  </div>
</template>

<script>
import ModalDialog from "@/components/ModalDialog/ModalDialog.vue";
import AlertDialog from "@/components/AlertDialog/AlertDialog.vue";
import MainNav from "@/components/MainNav/MainNav.vue";

export default {
  name: "HomeView",
  components: {
    ModalDialog,
    AlertDialog,
    MainNav,
  },
  data() {
    return {
      modalDailog: false,
      alertDialog: false,
    };
  },
  mounted() {},
  created() {},
  methods: {
    modalDailogOpen() {
      this.alertDialogClose();
      this.modalDailog = true;
    },
    modalDailogClose() {
      this.modalDailog = false;
    },
    alertDialogOpen() {
      this.alertDialog = true;
    },
    alertDialogClose() {
      this.alertDialog = false;
    },
  },
};
</script>
<style src="./HomeView.scss" lang="scss" />
