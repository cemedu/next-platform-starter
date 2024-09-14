/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    FILE_PATH: "./data.json",
    // SERVER: "http://localhost:4000",
    SERVER:"https://cemedu.vercel.app",
    RAZORPAY_API_KEY: "rzp_test_IQAiH9RI7Y0OJQ",
  }
};

export default nextConfig;
