import request from "../request";

export function createCompany(data) {
  return request({
    url: "/api/companies/create",
    method: "post",
    data,
  });
}

export function editCompany(data) {
  return request({
    url: "/api/companies/edit",
    method: "post",
    data,
  });
}

export function deleteCompany(data) {
  return request({
    url: "/api/companies/delete",
    method: "post",
    data,
  });
}

export function getCompany(params) {
  return request({
    url: "/api/companies/all",
    method: "get",
    params,
  });
}
