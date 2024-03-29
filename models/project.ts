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

import { FileModel } from './file-model';
import { TaskType } from './task-type';
import { Team } from './team';
import { UserModel } from './user-model';
 /**
 * 
 *
 * @export
 * @interface Project
 */
export interface Project {

    /**
     * @type {string}
     * @memberof Project
     */
    id: string;

    /**
     * @type {string}
     * @memberof Project
     */
    name: string;

    /**
     * @type {string}
     * @memberof Project
     */
    description: string;

    /**
     * @type {FileModel}
     * @memberof Project
     */
    icon?: FileModel;

    /**
     * @type {Array<TaskType>}
     * @memberof Project
     */
    taskTypes?: Array<TaskType> | null;

    /**
     * @type {Team}
     * @memberof Project
     */
    team?: Team;

    /**
     * @type {Array<UserModel>}
     * @memberof Project
     */
    users?: Array<UserModel> | null;

    /**
     * @type {UserModel}
     * @memberof Project
     */
    createdBy: UserModel;

    /**
     * @type {Date}
     * @memberof Project
     */
    createdAt?: Date;
}
