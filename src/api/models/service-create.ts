// tslint:disable
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EnvironmentLinkItem } from './environment-link-item';

/**
 * 
 * @export
 * @interface ServiceCreate
 */
export interface ServiceCreate {
    /**
     * The service name
     * @type {string}
     * @memberof ServiceCreate
     */
    name: string;
    /**
     * Indicates if the service is marked for start automatically on operating system boot
     * @type {boolean}
     * @memberof ServiceCreate
     */
    auto_start: boolean;
    /**
     * The expected initial state of the service after installed
     * @type {string}
     * @memberof ServiceCreate
     */
    initial_state: ServiceCreateInitialStateEnum;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof ServiceCreate
     */
    environments?: Array<EnvironmentLinkItem>;
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceCreateInitialStateEnum {
    Started = 'started',
    Stopped = 'stopped'
}



