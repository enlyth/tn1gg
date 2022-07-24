TN1.gg

This is a monorepo containing all the public TN1.gg code.

- UI (https://tn1.gg)
  - NextJS
  - TailwindCSS
- API (https://api.tn1.gg)
  - Apollo GraphQL

## Getting started

```bash
npm i -g lerna
yarn
lerna bootstrap
yarn dev
```

## Deployment

The Github Actions deployment script takes care of everything. We build, inject environment variables, copy files to the server, and run the services using PM2 installed on the VPS.

The services are reverse proxied with a custom NGINX configuration installed on the machine (not dockerized). We use Certbot for HTTPS.

## License

MIT
