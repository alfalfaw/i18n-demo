<template>
  <div class="wrapper">
    <div class="content">
      <p>{{ $t("hello") }}</p>
      <div class="btns">
        <button
          :class="{ active: active === index }"
          v-for="(lang, index) of langs"
          :key="index"
          @click="changeLanguage(lang.value)"
        >
          {{ lang.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloI18n",
  // "English", "中文", "Das ist Deutsch", "En français"
  data() {
    return {
      langs: [
        {
          label: "English",
          value: "en",
        },
        {
          label: "中文",
          value: "zh",
        },
        {
          label: "Das ist Deutsch",
          value: "de",
        },
        {
          label: "En français",
          value: "fr",
        },
      ],
    };
  },
  computed: {
    active() {
      const index = this.langs.findIndex(
        (item) => item.value === this.$i18n.locale
      );
      console.log(index);
      return index;
    },
  },

  methods: {
    changeLanguage(lang) {
      // 保存语言配置到localStorage
      localStorage.setItem("locale", lang);
      // 修改显示语言
      this.$i18n.locale = lang;
      // TODO 修改远程配置
    },
  },
  created() {},
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n !!"
  },
  "zh":{
    "hello":"你好, i18n !"
  },
  "fr":{
    "hello":"Bonjour i18n!"
  }
}
</i18n>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
.content {
  text-align: center;
}
.btns {
  /* width: 400px; */
  /* justify-content: space-between; */
  margin-top: 60px;

  display: flex;
}
.btns button {
  margin: 0 30px;
  padding: 5px 10px;
}
.btns button.active {
  background: #333;
  color: white;
}
</style>
