export const clear = () => {
  localStorage.removeItem("HNGx_stage3_login");
  localStorage.removeItem("HNGx_token");
};

export const getTokenFunc = () => {
  const token = localStorage.getItem("HNGx_token");
  const loginState = localStorage.getItem("HNGx_stage3_login");
  return { token, loginState };
};
