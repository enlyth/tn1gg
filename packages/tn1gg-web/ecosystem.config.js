module.exports = {
  apps: [
    {
      name: "tn1-web",
      script: "./dist/server.js",
      env: {
        NODE_ENV: "production",
      },
      // interpreter: "node",
      // interpreter: "/home/enlyth/.nvm/versions/node/v16.16.0/bin/node",
      interpreter: "/root/.nvm/versions/node/v16.16.0/bin/node",
    },
  ],
};
