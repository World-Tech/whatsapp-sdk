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
import { KeyDto } from './key-dto';
import { MessageDto } from './message-dto';
/**
*
*
* @export
* @interface RecordMessageDto
*/
export interface RecordMessageDto {
    /**
     * @type {string}
     * @memberof RecordMessageDto
     */
    id?: string;
    /**
     * @type {KeyDto}
     * @memberof RecordMessageDto
     */
    key?: KeyDto;
    /**
     * @type {string}
     * @memberof RecordMessageDto
     */
    pushName?: string;
    /**
     * @type {string}
     * @memberof RecordMessageDto
     */
    messageType?: string;
    /**
     * @type {MessageDto}
     * @memberof RecordMessageDto
     */
    message?: MessageDto;
    /**
     * @type {number}
     * @memberof RecordMessageDto
     */
    messageTimestamp?: number;
    /**
     * @type {string}
     * @memberof RecordMessageDto
     */
    instanceId?: string;
    /**
     * @type {string}
     * @memberof RecordMessageDto
     */
    source?: string;
    /**
     * @type {any}
     * @memberof RecordMessageDto
     */
    contextInfo?: any | null;
    /**
     * @type {Array<any>}
     * @memberof RecordMessageDto
     */
    messageUpdate?: Array<any>;
}
