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
 * @interface LanguageRuntimeFramework
 */
export interface LanguageRuntimeFramework {
    /**
     * The internal name/code of the language runtime
     * @type {string}
     * @memberof LanguageRuntimeFramework
     */
    name?: string;
    /**
     * The formatted name to be displayed in user interfaces
     * @type {string}
     * @memberof LanguageRuntimeFramework
     */
    displayable_name?: string;
    /**
     * Default values that apply to apps created in devopness using this framework
     * @type {Array<object>}
     * @memberof LanguageRuntimeFramework
     */
    defaults?: Array<object>;
}


