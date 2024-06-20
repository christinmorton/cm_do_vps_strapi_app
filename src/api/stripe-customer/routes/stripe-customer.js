'use strict';

/**
 * stripe-customer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe-customer.stripe-customer');
