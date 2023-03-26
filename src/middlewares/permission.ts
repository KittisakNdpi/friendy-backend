import { Request, Response, NextFunction } from 'express';

module.exports = (allowed: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(req.headers)
        next();
    }
}
