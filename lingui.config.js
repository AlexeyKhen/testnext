module.exports = {
  locales: ["ru", "en", "kk"],
  sourceLocale: "ru",
  fallbackLocales: {
    default: "ru",
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["src/pages", "src/components"],
    },
  ],
  format: "po",
};
