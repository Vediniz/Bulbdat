import dotenv from 'dotenv';
import userService from '../services/userService.js';
import jwt from 'jsonwebtoken';

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const parts = authorization.split(" ");

        const [schema, token] = parts;

        if (parts.length !== 2) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        if (schema !== "Bearer") {
            return res.status(401).send({ message: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.SECRET_JWT);

            if (!decoded || !decoded.id) {
                return res.status(401).send({ message: "Invalid Token" });
            }

            const user = await userService.findByIdService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid Token" });
            }

            req.userId = user._id;
            next();
        } catch (error) {
            return res.status(401).send({ message: "Token invalid" });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
