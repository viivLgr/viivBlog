/**
 * Parse response from server
 * @param response 
 * @return Promise<T>
 */
const parseResponse = <T>(response: Response): Promise<T> => {
    return new Promise<T>(async (resolve, reject) => {
        let content;

        try {
            content = await response.json() as any;
        } catch (error) {
            reject(`${response.status} ${response.statusText}`);
        }

        // 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
        // 默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。
        // Response ok but content error
        if(content && content.error) {
            reject(content.error);
        }

        // Response not ok but no server error
        if(response && !response.ok) {
            console.error('Server Error', response);
            reject('Server No Response');
        }

        resolve(content);
    });
}

/**
 * Format params to uri query
 * @param params 
 * @return string
 */
const paramsToUriQuery = (params: any): string => {
    if(!params) {
        return ''
    };

    return '?' + Object.keys(params).map((key: string) => {
        const value = params[key];
        return `${key}=${Array.isArray(value) ? value.join(',') : value}`;
    }).join('&');
}

/**
 * Set request headers
 * @return object
 */
const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}

/**
 * ----------------------- API CALLS -------------------------------
 */
export const GET = async <T>(url: string, params?: any): Promise<T> => {
    const response = await fetch(url + paramsToUriQuery(params), {
        method: 'GET',
        headers: getHeaders()
    });
    return await parseResponse<T>(response);
}

export const PUT = async <T>(url: string, params: any): Promise<T> => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(params)
    });
    return await parseResponse<T>(response);
}

export const POST = async <T>(url: string, params: any): Promise<T> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(params)
    });
    return await parseResponse<T>(response);
}

export const DELETE = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: getHeaders()
    });
    return await parseResponse<T>(response);
}