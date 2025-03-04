import request from "../request";

export function createArticle(data) {
  return request({
    url: "/api/articles/create",
    method: "post",
    data,
  });
}

export function updateArticle(data) {
  return request({
    url: "/api/articles/edit",
    method: "post",
    data,
  });
}

export function deleteArticle(data) {
  return request({
    url: "/api/articles/delete",
    method: "post",
    data,
  });
}

export function getArticle(params) {
  return request({
    url: "/api/articles/all",
    method: "get",
    params,
  });
}
