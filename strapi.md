john Q
http://localhost:1337/admin/

https://docs.strapi.io/developer-docs/latest/getting-started/
quick-start.html#_1-install-strapi-and-create-a-new-project

0. connect strapi to mongo
npx create-strapi-app@latest strapi

0. grant user permission- public:
http://localhost:1337/admin/settings/users-permissions/roles/2

0. swagger ui :
npm run strapi install documentation

http://localhost:1337/documentation

0. create settings.json:
{
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "DOCUMENTATION",
        "description": "",
        "termsOfService": "YOUR_TERMS_OF_SERVICE_URL",
        "contact": {
            "name": "TEAM",
            "email": "contact-email@something.io",
            "url": "mywebsite.io"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "x-strapi-config": {
        "path": "/documentation",
        "showGeneratedFiles": true,
        "pluginsForWhichToGenerateDoc": [
            "email",
            "upload",
            "users-permissions"
        ]
    },
    "servers": [
        {
            "url": "http://localhost:1337",
            "description": "Development server"
        },
        {
            "url": "YOUR_STAGING_SERVER",
            "description": "Staging server"
        },
        {
            "url": "YOUR_PRODUCTION_SERVER",
            "description": "Production server"
        }
    ],
    "externalDocs": {
        "description": "Find out more",
        "url": "https://strapi.io/documentation/"
    },
    "security": [
        {
            "bearerAuth": []
        }
    ],
    "paths": {},
    "tags": [],
    "components": {}
}

0. 