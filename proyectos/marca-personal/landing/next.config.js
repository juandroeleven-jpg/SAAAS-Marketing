/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // /hub sirve el Lead Hub sin obligar a escribir /hub/index.html.
    // El acceso lo controla middleware.ts, que cubre /hub y todo lo que cuelga.
    return [{ source: "/hub", destination: "/hub/index.html" }];
  },
};

module.exports = nextConfig;
