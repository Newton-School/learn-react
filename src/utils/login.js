const token = true;

export const isLogin = () => {
  if (token) {
    return true;
  }

  return false;
};
