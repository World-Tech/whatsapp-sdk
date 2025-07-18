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
import { NfmReplyDto } from './nfm-reply-dto';
/**
*
*
* @export
* @interface InteractiveMessageDto
*/
export interface InteractiveMessageDto {
    /**
     * @type {string}
     * @memberof InteractiveMessageDto
     */
    type: string;
    /**
     * @type {NfmReplyDto}
     * @memberof InteractiveMessageDto
     */
    nfm_reply?: NfmReplyDto;
}
