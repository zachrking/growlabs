const GUEST_CONSENT_FORM_ACCESS_TOKEN = "GUEST_CONSENT_FORM_ACCESS_TOKEN";

const ACTION_GUEST_CONSENT_FORM_ACCESS_TOKEN = (access_token) => {
  return {
    type: GUEST_CONSENT_FORM_ACCESS_TOKEN,
    access_token,
  };
};

export default ACTION_GUEST_CONSENT_FORM_ACCESS_TOKEN;
