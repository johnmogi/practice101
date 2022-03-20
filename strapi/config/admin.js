module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce70b1ae9a8b504a91edcf535f8e92c8'),
  },
});
