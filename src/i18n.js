import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
function getLanguage() {
  if (localStorage && localStorage.locale) {
    // alert("get from localStroge");
    return localStorage.locale;
  }
  // 使用浏览器环境中的语言，没有则默认使用 en
  return (navigator.language || navigator.userLanguage).split("-")[0];
}

// locale
export default new VueI18n({
  locale: getLanguage(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
