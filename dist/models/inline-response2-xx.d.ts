/**
 * whatsapp-api
 * Endpoints de whatsapp-api
 *
 * OpenAPI spec version: 1.0
 * Contact: libgot@libgot.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
*
*
* @export
* @interface InlineResponse2XX
*/
export interface InlineResponse2XX {
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    id?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    keyId?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    remoteJid?: string;
    /**
     * @type {boolean}
     * @memberof InlineResponse2XX
     */
    fromMe?: boolean;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    participant?: string | null;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    pollUpdates?: string | null;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    status?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    messageId?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2XX
     */
    instanceId?: string;
}