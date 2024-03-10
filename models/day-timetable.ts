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

import { DayOfWeek } from './day-of-week';
 /**
 * 
 *
 * @export
 * @interface DayTimetable
 */
export interface DayTimetable {

    /**
     * @type {string}
     * @memberof DayTimetable
     */
    id: string;

    /**
     * @type {Date}
     * @memberof DayTimetable
     */
    startsAt: Date;

    /**
     * @type {Date}
     * @memberof DayTimetable
     */
    endsAt: Date;

    /**
     * @type {string}
     * @memberof DayTimetable
     */
    type?: string | null;

    /**
     * @type {string}
     * @memberof DayTimetable
     */
    subType?: string | null;

    /**
     * @type {DayOfWeek}
     * @memberof DayTimetable
     */
    day?: DayOfWeek;

    /**
     * @type {string}
     * @memberof DayTimetable
     */
    name: string;
}
