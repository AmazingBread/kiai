<template>
  <nav>
    <section>
      <div>
        <img src="@/assets/image/nav-01-info.svg" />
        <p>사업소개</p>
      </div>
      <div>
        <img src="@/assets/image/nav-02-setting.svg" />
        <p>설치현황</p>
      </div>
      <div>
        <img src="@/assets/image/nav-03-weather.svg" />
        <p>기상특보</p>
      </div>
      <div>
        <img src="@/assets/image/nav-04-wall.svg" style="width: 100px" />
        <p>홍수방어벽</p>
      </div>
      <div>
        <img src="@/assets/image/nav-05-sensor.svg" />
        <p>IoT센서정보</p>
      </div>
      <div>
        <img src="@/assets/image/nav-06-map.svg" />
        <p>침수위험지도</p>
      </div>
    </section>
    <div class="sub-menu">
      <div>
        <img src="@/assets/image/ico-home.png" />
        <p>부산시도시침수<br />통합정보시스템</p>
      </div>
      <div @click="modalDailogOpen()">
        <img src="@/assets/image/ico-message.png" />
        <p>침수위험정보 <br />알림톡 신청</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
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
    modalDailogOpen() {
      this.$emit("modalDailogOpen");
    },
  },
};
</script>
