module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0657ff6ce1b4534afa2d82d57fe6f49b'),
  },
});
