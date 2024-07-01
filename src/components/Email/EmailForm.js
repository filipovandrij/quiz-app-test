import { useState } from "react";
import "./EmailForm.scss";
import { useTranslation } from "react-i18next";

const EmailForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setError("");
      onSubmit(email);
    } else {
      setError("Invalid email address");
    }
  };

  return (
    <div className="email-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("email")}
      />
      {error && <span className="error">{error}</span>}
      <button onClick={handleSubmit} disabled={!validateEmail(email)}>
        {t("next")}
      </button>
    </div>
  );
};

export default EmailForm;
