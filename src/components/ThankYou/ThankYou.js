import React from "react";
import { useTranslation } from "react-i18next";
import "./ThankYou.scss";

const ThankYou = ({ onRetake, onDownload }) => {
  const { t } = useTranslation();

  return (
    <div className="thank-you">
      <h2>{t("thank_you")}</h2>
      <button onClick={onRetake}>{t("retake_quiz")}</button>
      <button onClick={onDownload}>{t("download_answers")}</button>
    </div>
  );
};

export default ThankYou;
