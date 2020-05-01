const token = false;

export const isLogin = () => {
  if (token) {
    return true;
  }

  return false;
};
