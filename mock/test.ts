// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: {
                    name: 'vben'
                }
            };
        }
    },
    {
        url: '/api/post',
        method: 'post',
        timeout: 2000,
        response: {
            code: 0,
            data: {
                name: 'vben'
            }
        }
    },
    {
        url: '/api/text',
        method: 'post',
        rawResponse: async(req, res) => {
            let reqbody = '';
            await new Promise((resolve) => {
                req.on('data', (chunk) => {
                    reqbody += chunk;
                });
                req.on('end', () => resolve(undefined));
            });
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            res.end(`hello, ${reqbody}`);
        }
    },
    {
        url: '/api/scene',
        method: 'get',
        response: () => {
            return {
                code: 0,
                'list|10': [{
                    'id|+1': 1,
                    username: '@cname()',
                    'age|15-40': 0,
                    date: '@date(yyyy-mm-dd)',
                    'description|10':'*',
                    email: '@email()' 
                    
                }]
            };
        }
    },
    {
        url: '/api/usermanage',
        method: 'get',
        response: () => {
            return {
                code: 0,
                'list|10': [{
                    'id|+1': 1,
                    username: '@cname()',
                    createtime: '@date(yyyy-mm-dd)',
                    userrole:'超级管理员',
                    email: '@email()',
                    phone:/\d{1,11}/,
                    statu:'1'

                }]
            };
        }
    }
] as MockMethod[];
