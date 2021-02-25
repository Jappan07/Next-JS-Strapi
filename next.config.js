const path = require("path")
// require("dotenv").config()

module.exports = {
    // env: {
    //     API_URL: process.env.API_URL
    // },

    images: {
        deviceSizes: [640, 768, 1024, 1280, 1600],
        imageSizes: [16, 32, 48, 64, 96],
        domains: ["localhost"],
        path: "/_next/image",
        loader: "default"
    },

    webpack: config => {
        config.resolve.alias["components"] = path.join(__dirname, "components")
        config.resolve.alias["public"] = path.join(__dirname, "public")
        return config
    }
}