export const setCookie = (name: string, value: string, exp: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + exp * 1 * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    ";expires=" +
    date.toUTCString() +
    ";path=/; samesite=lax";
};

export const getCookie = (name: string): string | null => {
  const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? encodeURIComponent(value[2]) : null;
};

export const resetCookie = (cName: string): void => {
  const expireDate: Date = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  document.cookie =
    cName +
    "= " +
    "; expires=" +
    expireDate.toUTCString() +
    "; path=/; samesite=lax";
};

/*
ms 24 * 60 * 60 * 1000 얼마?

계산 과정:
1시간은 60분입니다.
1분은 60초입니다.
1초는 1000밀리초입니다.
따라서 24시간은 다음과 같이 계산됩니다.

24시간 * 60분/시간 * 60초/분 * 1000ms/초 = 86,400,000ms

결론:
24 * 60 * 60 * 1000ms는 86,400,000ms입니다. 즉, 86,400초 또는 1,440분 또는 24시간과 같습니다.
 */
