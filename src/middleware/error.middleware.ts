import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const errorMessage = error.error || null;

    res.status(status).json({
        message,
        error: errorMessage
    });
}