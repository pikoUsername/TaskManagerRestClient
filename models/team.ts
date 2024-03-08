/* tslint:disable */
/* eslint-disable */
/**
 * My API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { DayTimetable } from './day-timetable';
import { FileModel } from './file-model';
import { Group } from './group';
import { UserModel } from './user-model';
 /**
 * 
 *
 * @export
 * @interface Team
 */
export interface Team {

    /**
     * @type {string}
     * @memberof Team
     */
    id?: string;

    /**
     * @type {string}
     * @memberof Team
     */
    name?: string | null;

    /**
     * @type {boolean}
     * @memberof Team
     */
    deleted?: boolean;

    /**
     * @type {FileModel}
     * @memberof Team
     */
    avatar?: FileModel;

    /**
     * @type {UserModel}
     * @memberof Team
     */
    createdBy?: UserModel;

    /**
     * @type {Array<Group>}
     * @memberof Team
     */
    groups?: Array<Group> | null;

    /**
     * @type {Array<DayTimetable>}
     * @memberof Team
     */
    dayTimetables?: Array<DayTimetable> | null;

    /**
     * @type {number}
     * @memberof Team
     */
    membersCount?: number;
}
