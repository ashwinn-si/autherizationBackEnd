const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require("./routes/adminRoutes");
const commonRoutes = require("./routes/commonRoutes");
const teamLeaderRoutes = require("./routes/teamLeaderRoutes");
const internRoutes = require("./routes/internRoutes")

//middleware
app.use(express.json())
const allowedOrigins = [
    "https://autherization-front-ksg8p0pea-ashwin-s-is-projects.vercel.app",
    "http://localhost:3000"
];

// CORS Configuration
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));


//routes
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/teamleader",teamLeaderRoutes)
app.use("/api/common",commonRoutes)
app.use("/api/intern",internRoutes)

module.exports = app;