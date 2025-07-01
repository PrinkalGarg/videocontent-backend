import jwt from 'jsonwebtoken';

const authenticationMiddleware = (req, res, next) => {
    const {token} = req.headers;

    if (!token) {
                return res.status(401).json('User not authenticated, please login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userid = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json('Invalid User Details, please login again');
    }
};

export default authenticationMiddleware;