/* tslint:disable */
/* eslint-disable */
/**
 * TaskManager
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CreateGroupScheme } from '../models';
import { Group } from '../models';
/**
 * GroupsControllersApi - axios parameter creator
 * @export
 */
export const GroupsControllersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateGroupScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup: async (body?: CreateGroupScheme, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGroup.');
            }
            const localVarPath = `/api/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [teamId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups: async (teamId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['teamId'] = teamId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsControllersApi - functional programming interface
 * @export
 */
export const GroupsControllersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateGroupScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(body?: CreateGroupScheme, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Group>>> {
            const localVarAxiosArgs = await GroupsControllersApiAxiosParamCreator(configuration).createGroup(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Group>>> {
            const localVarAxiosArgs = await GroupsControllersApiAxiosParamCreator(configuration).deleteGroup(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [teamId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroups(teamId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Group>>>> {
            const localVarAxiosArgs = await GroupsControllersApiAxiosParamCreator(configuration).getGroups(teamId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GroupsControllersApi - factory interface
 * @export
 */
export const GroupsControllersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CreateGroupScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(body?: CreateGroupScheme, options?: AxiosRequestConfig): Promise<AxiosResponse<Group>> {
            return GroupsControllersApiFp(configuration).createGroup(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Group>> {
            return GroupsControllersApiFp(configuration).deleteGroup(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [teamId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroups(teamId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Group>>> {
            return GroupsControllersApiFp(configuration).getGroups(teamId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsControllersApi - object-oriented interface
 * @export
 * @class GroupsControllersApi
 * @extends {BaseAPI}
 */
export class GroupsControllersApi extends BaseAPI {
    /**
     * 
     * @param {CreateGroupScheme} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsControllersApi
     */
    public async createGroup(body?: CreateGroupScheme, options?: AxiosRequestConfig) : Promise<AxiosResponse<Group>> {
        return GroupsControllersApiFp(this.configuration).createGroup(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsControllersApi
     */
    public async deleteGroup(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Group>> {
        return GroupsControllersApiFp(this.configuration).deleteGroup(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [teamId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsControllersApi
     */
    public async getGroups(teamId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Group>>> {
        return GroupsControllersApiFp(this.configuration).getGroups(teamId, options).then((request) => request(this.axios, this.basePath));
    }
}
