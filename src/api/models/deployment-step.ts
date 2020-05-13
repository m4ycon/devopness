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



/**
 * 
 * @export
 * @interface DeploymentStep
 */
export interface DeploymentStep {
    /**
     * The execution order of the given step
     * @type {number}
     * @memberof DeploymentStep
     */
    order: number;
    /**
     * The step name
     * @type {string}
     * @memberof DeploymentStep
     */
    name: string;
    /**
     * Current status of the deployment step
     * @type {string}
     * @memberof DeploymentStep
     */
    status: DeploymentStepStatusEnum;
    /**
     * The date and time when the step started to be executed (left the `pending/waiting` status)
     * @type {string}
     * @memberof DeploymentStep
     */
    started_at?: string;
    /**
     * The date and time when the step has finished execution
     * @type {string}
     * @memberof DeploymentStep
     */
    completed_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentStepStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Successful = 'successful',
    Failed = 'failed'
}



