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
 * @interface NetworkRuleCreate
 */
export interface NetworkRuleCreate {
    /**
     * The rule\'s name/description/reminder
     * @type {string}
     * @memberof NetworkRuleCreate
     */
    name: string;
    /**
     * The type of network traffic to which this rule will be applied
     * @type {string}
     * @memberof NetworkRuleCreate
     */
    type: NetworkRuleCreateTypeEnum;
    /**
     * The network protocol to which this rule will be applied.
     * @type {string}
     * @memberof NetworkRuleCreate
     */
    protocol: NetworkRuleCreateProtocolEnum;
    /**
     * Starting range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRuleCreate
     */
    ip_address_from: string;
    /**
     * Ending range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRuleCreate
     */
    ip_address_to: string;
    /**
     * Starting range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRuleCreate
     */
    port_from: number;
    /**
     * Ending range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRuleCreate
     */
    port_to: number;
}

/**
    * @export
    * @enum {string}
    */
export enum NetworkRuleCreateTypeEnum {
    Inbound = 'inbound',
    Outbound = 'outbound'
}
/**
    * @export
    * @enum {string}
    */
export enum NetworkRuleCreateProtocolEnum {
    Any = 'any',
    Tcp = 'tcp',
    Udp = 'udp'
}



