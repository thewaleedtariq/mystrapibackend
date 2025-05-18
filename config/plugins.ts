module.exports = {
    seo: {
        enabled: true,
    },
    'strapi-5-sitemap-plugin': {
        enabled: true,
        config: {
            // Optional but recommended
            autoGenerate: true,
            caching: true,
            maxEntriesPerSitemap: 5000,
            includeDrafts: false,
            // Optional: base URL of your frontend
            hostname: 'http://localhost:3000',

            // exclude: ['/admin'], // exclude paths if needed
        },
    },
};
