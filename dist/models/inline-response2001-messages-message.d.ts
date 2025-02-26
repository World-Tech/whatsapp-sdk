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
import { InlineResponse2001MessagesMessageImageMessage } from './inline-response2001-messages-message-image-message';
import { InlineResponse2001MessagesMessageText } from './inline-response2001-messages-message-text';
import { InlineResponse2001MessagesMessageVideoMessage } from './inline-response2001-messages-message-video-message';
/**
*
*
* @export
* @interface InlineResponse2001MessagesMessage
*/
export interface InlineResponse2001MessagesMessage {
    /**
     * @type {InlineResponse2001MessagesMessageText}
     * @memberof InlineResponse2001MessagesMessage
     */
    text?: InlineResponse2001MessagesMessageText;
    /**
     * @type {InlineResponse2001MessagesMessageImageMessage}
     * @memberof InlineResponse2001MessagesMessage
     */
    imageMessage?: InlineResponse2001MessagesMessageImageMessage;
    /**
     * @type {InlineResponse2001MessagesMessageVideoMessage}
     * @memberof InlineResponse2001MessagesMessage
     */
    videoMessage?: InlineResponse2001MessagesMessageVideoMessage;
}
