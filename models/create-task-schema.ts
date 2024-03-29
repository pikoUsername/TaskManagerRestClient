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

 /**
 * 
 *
 * @export
 * @interface CreateTaskSchema
 */
export interface CreateTaskSchema {

    /**
     * @type {string}
     * @memberof CreateTaskSchema
     */
    projectId: string;

    /**
     * @type {string}
     * @memberof CreateTaskSchema
     */
    assignToUserId?: string | null;

    /**
     * @type {string}
     * @memberof CreateTaskSchema
     */
    title: string;

    /**
     * @type {string}
     * @memberof CreateTaskSchema
     */
    description: string;

    /**
     * @type {string}
     * @memberof CreateTaskSchema
     */
    status: string;

    /**
     * @type {Date}
     * @memberof CreateTaskSchema
     */
    startsAt?: Date | null;

    /**
     * @type {Date}
     * @memberof CreateTaskSchema
     */
    endsAt?: Date | null;
}
