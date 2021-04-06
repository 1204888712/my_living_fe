import { request } from 'umi';
/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2021-04-02 15:03:20
 */

/** 登录接口 POST /api/login/account */
export async function login(body: any, options?: Record<string, any>) {
  return request('/live/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
