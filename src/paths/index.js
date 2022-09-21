/**
 * Page가 로그인이 필요할 경우 마지막 인자를 false로 넣어준다.
 * isPublic default value는 true이기 때문에 굳이 추가해줄 필요는 없습니다.
 */

function path(...options) {
  const links = options.slice(0, options.length - 1);
  const isPublic = options[options.length - 1];
  const url = `/${links.join("/")}`;

  return {
    url,
    isPublic: typeof isPublic === "boolean" ? isPublic : true,
  };
}

const ROOTS = "";
const ROOTS_ERROR = "error";
const ROOTS_AUTH = "oauth";

export const PATH_ERROR = {
  root: path(ROOTS_ERROR, null),
  page404: path(ROOTS_ERROR, "404"),
  page500: path(ROOTS_ERROR, "500"),
};

export const PATH_PAGE = {
  root: path(ROOTS),
};

export const PATH_AUTH = {
  root: path(ROOTS_AUTH),
  login: path(ROOTS_AUTH, "login"),
  success: path(ROOTS_AUTH, "success"),
};
