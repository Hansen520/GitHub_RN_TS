/*
 * @Date: 2023-11-10 15:11:24
 * @Description: description
 */
import Constants from './Constants';

export const get = (api: string) => {
  return async (params?: {}) => {
    const {headers, url} = Constants;
    return handleData(fetch(buildParams(url + api, params), {
        headers: {
            ...headers
        }
    }));
  };
};

export const post = (api: string) => {
    /**
     * 第一个参数作为body参数，第二个参数作为URL path或者查询参数
     */
    return (params: {}) => {
        return async (queryParams?: {} | string) => {
            const { headers, url } = Constants;
            var data, cType;
            if (params instanceof FormData) {
                data = params;
                cType = 'multipart/form-data';// fix TypeError: Network request failed
            } else {
                data = JSON.stringify(params);
                cType = 'application/json';
            }
            return handleData(fetch(buildParams(url + api, queryParams),
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'content-type': cType,
                        ...headers,
                    }
                }
            ))
        }
    }
}

/**
 * 处理接口返回数据
 * @param doAction
 */
const handleData = (doAction: Promise<any>) => {
  return new Promise((resolve, reject) => {
    doAction
      .then(res => {
        //解析Content-Type 防止将非json数据进行json转换
        const type = res.headers.get('Content-Type');
        if ((type || '').indexOf('json') !== -1) {
          return res.json();
        }
        return res.text();
      })
      .then(result => {
        if (typeof result === 'string') {
          throw new Error(result);
        }
        const {code, msg, data: {list = undefined} = {}} = result;
        if (code === 401) {
          // todo
          return;
        }
        resolve(list || result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * 构建url参数
 * @param url 路径
 * @param params 参数
 * @returns 
 */
const buildParams = (url: string, params?: {} | string): string => {
    let newUrl = new URL(url), finalUrl;
    if (typeof params === 'object') { // formData
        for (const [key, value] of Object.entries(params)) {
            newUrl.searchParams.append(key, value as string);
        }
        finalUrl = newUrl.toString();
    } else if(typeof params === 'string') { // string
        finalUrl = url.endsWith('/') ? url + params : url + '/' + params
    } else { // 其他
        finalUrl = newUrl.toString();
    }
    console.log('---buildParams----:', finalUrl);
    return finalUrl;
}
