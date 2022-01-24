module.exports = {
    siteMetadata: {
        title: `Learn Gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
        // "gatsby-transformer-sharp",
    ],
};


// module.exports = {
//     siteMetadata: {
//         title: "My First Gatsby Site",
//     },
//     plugins: [
//         // ...existing plugins
//         "gatsby-transformer-sharp",
//     ],
// };
