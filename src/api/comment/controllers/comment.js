'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({strapi}) => ({
    async create(ctx) {
        const user = ctx.state.user;
        // 2
        ctx.request.body.data = {
            ...ctx.request.body.data,
            author: user.username,
            user: user.id
        };
  
        // 3
        const response = await super.create(ctx);
    
        // 4
        return response;
        }
}));
