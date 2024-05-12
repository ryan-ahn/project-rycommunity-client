export const addRequestHeader = (isMultiPart: boolean | undefined = false) => {
  const headers: any = {};
  const access = useCookie('access');
  if (access.value) {
    headers.Authorization = `${access.value}`;
  }
  if (isMultiPart) {
    headers['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
  } else {
    headers['Content-Type'] = 'application/json';
  }
  return headers;
};
