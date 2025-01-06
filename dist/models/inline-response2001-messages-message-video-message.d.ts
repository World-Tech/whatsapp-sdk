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
import { InlineResponse2001MessagesMessageImageMessageContextInfo } from './inline-response2001-messages-message-image-message-context-info';
/**
*
*
* @export
* @interface InlineResponse2001MessagesMessageVideoMessage
*/
export interface InlineResponse2001MessagesMessageVideoMessage {
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    url?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    caption?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    mediaKey?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    mimetype?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    directPath?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    fileLength?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    fileSha256?: string;
    /**
     * @type {InlineResponse2001MessagesMessageImageMessageContextInfo}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    contextInfo?: InlineResponse2001MessagesMessageImageMessageContextInfo;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    fileEncSha256?: string;
    /**
     * @type {string}
     * @memberof InlineResponse2001MessagesMessageVideoMessage
     */
    thumbnail?: string;
}