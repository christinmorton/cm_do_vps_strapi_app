'use strict';

/**
 * client-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-message.client-message');
