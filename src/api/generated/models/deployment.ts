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


import { Action } from './action';
import { ActionStatus } from './action-status';
import { Commit } from './commit';
import { DeploymentSource } from './deployment-source';
import { DeploymentStep } from './deployment-step';
import { DeploymentType } from './deployment-type';
import { User } from './user';

/**
 * 
 * @export
 * @interface Deployment
 */
export interface Deployment {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Deployment
     */
    id: number;
    /**
     * 
     * @type {ActionStatus}
     * @memberof Deployment
     */
    status: ActionStatus;
    /**
     * 
     * @type {DeploymentType}
     * @memberof Deployment
     */
    type: DeploymentType;
    /**
     * 
     * @type {DeploymentSource}
     * @memberof Deployment
     */
    source: DeploymentSource;
    /**
     * The date and time when the action started execution (i.e., left the `pending/queued` status)
     * @type {string}
     * @memberof Deployment
     */
    started_at?: string | null;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof Deployment
     */
    completed_at?: string | null;
    /**
     * The list of related actions
     * @type {Array<Action>}
     * @memberof Deployment
     */
    actions?: Array<Action>;
    /**
     * 
     * @type {Commit}
     * @memberof Deployment
     */
    commit: Commit;
    /**
     * The steps that were meant to be executed when the deployment was triggered
     * @type {Array<DeploymentStep>}
     * @memberof Deployment
     */
    steps: Array<DeploymentStep>;
    /**
     * 
     * @type {User}
     * @memberof Deployment
     */
    triggered_by_user?: User;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Deployment
     */
    created_at?: string | null;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Deployment
     */
    updated_at?: string | null;
}

