const Query = {
  async users(_, args, ctx, info) {
    // 1. check if they are logged in

    // TODO: Add this back. ctx.req doesnt look like it exists. Also import hasPermission
    // if (!ctx.req.userId) {
    //   throw new Error('You must be logged in!');
    // }
    // 2. check if the user has the permissions to query all the users
    //hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPATE']);

    // 3. if they do, query all the users
    return ctx.prisma.users({}, info);
  }
}

module.exports = Query;