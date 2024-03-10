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

import { Project } from './project';
import { TaskTag } from './task-tag';
import { UserModel } from './user-model';
 /**
 * 
 *
 * @export
 * @interface TaskModel
 */
export interface TaskModel {

    /**
     * @type {string}
     * @memberof TaskModel
     */
    id: string;

    /**
     * @type {string}
     * @memberof TaskModel
     */
    title: string;

    /**
     * @type {string}
     * @memberof TaskModel
     */
    description: string;

    /**
     * @type {string}
     * @memberof TaskModel
     */
    status: string;

    /**
     * @type {Date}
     * @memberof TaskModel
     */
    startedAt: Date;

    /**
     * @type {Date}
     * @memberof TaskModel
     */
    endsAt?: Date;

    /**
     * @type {UserModel}
     * @memberof TaskModel
     */
    assignedUser?: UserModel;

    /**
     * @type {Project}
     * @memberof TaskModel
     */
    project: Project;

    /**
     * @type {UserModel}
     * @memberof TaskModel
     */
    createdBy: UserModel;

    /**
     * @type {Array<TaskTag>}
     * @memberof TaskModel
     */
    tags?: Array<TaskTag> | null;
}
