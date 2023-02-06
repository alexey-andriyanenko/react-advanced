import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { Languages } from "shared/types";

export const LangSwitcher: React.FC = memo(() => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const result = i18n.language === Languages.EN ? Languages.RU : Languages.EN;
    i18n.changeLanguage(result);
  };

  return (
    <button type="button" onClick={toggleLanguage}>
      {t("lang-switcher")}
    </button>
  );
});
