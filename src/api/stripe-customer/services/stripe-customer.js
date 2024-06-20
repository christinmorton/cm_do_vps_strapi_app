'use strict';

/**
 * stripe-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-customer.stripe-customer');
