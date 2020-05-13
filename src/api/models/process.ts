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
 * @interface Process
 */
export interface Process {
    /**
     * The Id of the given background process
     * @type {number}
     * @memberof Process
     */
    id?: number;
    /**
     * The name entered by the user (or auto-generated by `devopness`) to uniquely identify the process
     * @type {string}
     * @memberof Process
     */
    name: string;
    /**
     * The command line to be executed to start the process
     * @type {string}
     * @memberof Process
     */
    command: string;
    /**
     * The working directory where the process will be relative to when performing disk i/o
     * @type {string}
     * @memberof Process
     */
    working_directory: string;
    /**
     * The number of process instances of the program to run simultaneously
     * @type {number}
     * @memberof Process
     */
    process_count: number;
    /**
     * The name of the Unix user on behalf of which the process will run
     * @type {string}
     * @memberof Process
     */
    run_as_user: string;
    /**
     * Indicates if the command was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof Process
     */
    auto_generated?: boolean;
    /**
     * Current status of deploying to remote servers the current daemon process
     * @type {string}
     * @memberof Process
     */
    status?: ProcessStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ProcessStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}



