import { Request, Response, NextFunction } from 'express';

module.exports = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        next();
    }
}