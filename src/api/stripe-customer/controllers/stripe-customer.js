'use strict';

/**
 * stripe-customer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-customer.stripe-customer');
