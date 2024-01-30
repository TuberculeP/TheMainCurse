/**
 * tag controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::tag.tag", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::tag.tag").findOne({
      where: { name: id },
      populate: ["recipes", "recipes.image"],
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
