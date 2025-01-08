/* tslint:disable */
/* eslint-disable */
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
 * @interface DeviceListMetadataDto
 */
export interface DeviceListMetadataDto {

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    senderKeyHash?: string;

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    senderTimestamp?: string;

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    recipientKeyHash?: string;

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    senderAccountType?: string;

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    recipientTimestamp?: string;

    /**
     * @type {string}
     * @memberof DeviceListMetadataDto
     */
    receiverAccountType?: string;
}