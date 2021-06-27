module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [{
                source: "/about",
                destination: "/",
                permanent: false,
            },
            {
                source: "/about-me",
                destination: "/",
                permanent: false,
            },
            {
                source: "/about-us",
                destination: "/",
                permanent: false,
            },
            {
                source: "/contact",
                destination: "/?tab=contact",
                permanent: false,
            },
            {
                source: "/contact-me",
                destination: "/?tab=contact",
                permanent: false,
            },
            {
                source: "/hire-me",
                destination: "/?tab=hire",
                permanent: false,
            },
            {
                source: "/hire",
                destination: "/?tab=hire",
                permanent: false,
            },
            {
                source: "/freelance",
                destination: "/?tab=hire",
                permanent: false,
            },
            {
                source: "/freelancing",
                destination: "/?tab=hire",
                permanent: false,
            },
            {
                source: "/photography",
                destination: "/?tab=photo",
                permanent: false,
            },
            {
                source: "/photo",
                destination: "/?tab=photo",
                permanent: false,
            },
            {
                source: "/toolkit",
                destination: "/?tab=tools",
                permanent: false,
            },
            {
                source: "/tool-kit",
                destination: "/?tab=tools",
                permanent: false,
            },
            {
                source: "/admin.php",
                destination: "/admin",
                permanent: false,
            },
            {
                source: "/wp-admin",
                destination: "/admin",
                permanent: false,
            },
            {
                source: "/wp-admin.php",
                destination: "/admin",
                permanent: false,
            },
            {
                source: "/login.php",
                destination: "/admin",
                permanent: false,
            },
            {
                source: "/login",
                destination: "/admin",
                permanent: false,
            },
        ];
    },
};