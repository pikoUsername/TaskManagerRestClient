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
import { AddUserToTeam } from '../models';
import { AttendanceUserScheme } from '../models';
import { CreateTeamSchema } from '../models';
import { Team } from '../models';
/**
 * TeamControllersApi - axios parameter creator
 * @export
 */
export const TeamControllersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {AddUserToTeam} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUserToTeam: async (id: string, body?: AddUserToTeam, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling addUserToTeam.');
            }
            const localVarPath = `/api/team/{id}/groups/adduser`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {CreateTeamSchema} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTeam: async (body?: CreateTeamSchema, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/team`;
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
        getTeam: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTeam.');
            }
            const localVarPath = `/api/team/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {string} id 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamAttendance: async (id: string, workType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTeamAttendance.');
            }
            const localVarPath = `/api/team/{id}/attendance`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (workType !== undefined) {
                localVarQueryParameter['workType'] = workType;
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
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamsAll: async (userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/team`;
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

            if (userId !== undefined) {
                localVarQueryParameter['UserId'] = userId;
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
 * TeamControllersApi - functional programming interface
 * @export
 */
export const TeamControllersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {AddUserToTeam} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUserToTeam(id: string, body?: AddUserToTeam, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Team>>> {
            const localVarAxiosArgs = await TeamControllersApiAxiosParamCreator(configuration).addUserToTeam(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CreateTeamSchema} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeam(body?: CreateTeamSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Team>>> {
            const localVarAxiosArgs = await TeamControllersApiAxiosParamCreator(configuration).createTeam(body, options);
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
        async getTeam(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Team>>> {
            const localVarAxiosArgs = await TeamControllersApiAxiosParamCreator(configuration).getTeam(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamAttendance(id: string, workType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<AttendanceUserScheme>>>> {
            const localVarAxiosArgs = await TeamControllersApiAxiosParamCreator(configuration).getTeamAttendance(id, workType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamsAll(userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Team>>>> {
            const localVarAxiosArgs = await TeamControllersApiAxiosParamCreator(configuration).getTeamsAll(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TeamControllersApi - factory interface
 * @export
 */
export const TeamControllersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {AddUserToTeam} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUserToTeam(id: string, body?: AddUserToTeam, options?: AxiosRequestConfig): Promise<AxiosResponse<Team>> {
            return TeamControllersApiFp(configuration).addUserToTeam(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateTeamSchema} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTeam(body?: CreateTeamSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<Team>> {
            return TeamControllersApiFp(configuration).createTeam(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeam(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Team>> {
            return TeamControllersApiFp(configuration).getTeam(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {string} [workType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamAttendance(id: string, workType?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<AttendanceUserScheme>>> {
            return TeamControllersApiFp(configuration).getTeamAttendance(id, workType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamsAll(userId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Team>>> {
            return TeamControllersApiFp(configuration).getTeamsAll(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TeamControllersApi - object-oriented interface
 * @export
 * @class TeamControllersApi
 * @extends {BaseAPI}
 */
export class TeamControllersApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {AddUserToTeam} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamControllersApi
     */
    public async addUserToTeam(id: string, body?: AddUserToTeam, options?: AxiosRequestConfig) : Promise<AxiosResponse<Team>> {
        return TeamControllersApiFp(this.configuration).addUserToTeam(id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CreateTeamSchema} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamControllersApi
     */
    public async createTeam(body?: CreateTeamSchema, options?: AxiosRequestConfig) : Promise<AxiosResponse<Team>> {
        return TeamControllersApiFp(this.configuration).createTeam(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamControllersApi
     */
    public async getTeam(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Team>> {
        return TeamControllersApiFp(this.configuration).getTeam(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {string} [workType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamControllersApi
     */
    public async getTeamAttendance(id: string, workType?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<AttendanceUserScheme>>> {
        return TeamControllersApiFp(this.configuration).getTeamAttendance(id, workType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [userId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamControllersApi
     */
    public async getTeamsAll(userId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Team>>> {
        return TeamControllersApiFp(this.configuration).getTeamsAll(userId, options).then((request) => request(this.axios, this.basePath));
    }
}
