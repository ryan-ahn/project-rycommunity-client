export const setAccessToken = (name: string, value: string) => {
  const maxAge = 24 * 60 * 60 * 365;
  const date = new Date();
  const expires = new Date(
    date.setTime(date.getTime() + 24 * 60 * 60 * 365 * 1000),
  );
  const access = useCookie(name, {
    maxAge,
    expires,
  });
  access.value = value;
};

export const deleteAccessToken = () => {
  const access = useCookie('access');
  access.value = null;
};
