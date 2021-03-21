import { useCookies } from 'react-cookie';

const useCookieByKey = (
  key: string,
  defaultValue?: string | boolean | number | {}
) => {
  const [cookies] = useCookies();
  return cookies[key] || defaultValue || '';
};

export default useCookieByKey;