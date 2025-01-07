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
import { QuickReplyButtonDto } from './quick-reply-button-dto';
/**
*
*
* @export
* @interface HydratedButtonDto
*/
export interface HydratedButtonDto {
    /**
     * @type {number}
     * @memberof HydratedButtonDto
     */
    index?: number;
    /**
     * @type {QuickReplyButtonDto}
     * @memberof HydratedButtonDto
     */
    quickReplyButton?: QuickReplyButtonDto;
}