/* eslint-disable */
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


import { TriggerEvent } from './trigger-event';

/**
 * 
 * @export
 * @interface DeploymentDefaultStep
 */
export interface DeploymentDefaultStep {
    /**
     * 
     * @type {TriggerEvent}
     * @memberof DeploymentDefaultStep
     */
    value: TriggerEvent;
    /**
     * Formatted name of the event
     * @type {string}
     * @memberof DeploymentDefaultStep
     */
    human_readable: string;
    /**
     * Text describing when the event is triggered
     * @type {string}
     * @memberof DeploymentDefaultStep
     */
    hint: string;
}

