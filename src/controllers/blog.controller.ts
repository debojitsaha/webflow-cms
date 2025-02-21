import { Types } from "mongoose";
import { NextFunction, Request, Response } from "express";
import { BlogDto, UpdateBlogDto } from "../dtos/blog.dto";
import * as blogService from "../services/blog.service";
import { GenerateResponse } from "../utils/response.creator";

const mapRequestToBlogDto = (body: any): BlogDto => {
    return {
        ...body,
        webflowId: body.id,
        fieldData: {
            ...body.fieldData,
            featuredBlog: body.fieldData?.["featured-blog"] ?? false,
            popularBlog: body.fieldData?.["popular-blog"] ?? false,
            trendingBlog: body.fieldData?.["trending-blog"] ?? false,
            readTime: body.fieldData?.["read-time"] ?? "3 minutes",
            tag: body.fieldData?.["tag-2"] ?? body.fieldData?.tag ?? "Zocket",
        },
    };
};

const CreateBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blog: BlogDto = mapRequestToBlogDto(req.body);
        const createdBlog = await blogService.createBlog(blog);
        GenerateResponse(res, 201, createdBlog, "Blog created successfully");
    } catch (error) {
        next(error);
    }
};

const FetchBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await blogService.fetchtBlogs();
        // GenerateResponse(res, 200, blogs, "Blogs fetched successfully");
        res.send("Blogs fetched successfully");
    } catch (error) {
        next(error);
    }
};

const FetchBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const blog = await blogService.fetchtBlogById(new Types.ObjectId(id));
        GenerateResponse(res, 200, blog, "Blog fetched successfully");
    } catch (error) {
        next(error);
    }
};

const FetchBlogBySlug = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { slug } = req.params;
        const blog = await blogService.fetchBlogBySlug(slug);
        GenerateResponse(res, 200, blog, "Blog fetched successfully");
    } catch (error) {
        next(error);
    }
};

const UpdateBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const blog: UpdateBlogDto = req.body;
        const updatedBlog = await blogService.updateBlog(new Types.ObjectId(id), blog);
        GenerateResponse(res, 200, updatedBlog, "Blog updated successfully");
    } catch (error) {
        next(error);
    }
};

const DeleteBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await blogService.deleteBlog(new Types.ObjectId(id));
        GenerateResponse(res, 200, null, "Blog deleted successfully");
    } catch (error) {
        next(error);
    }
};

export { CreateBlog, FetchBlogs, FetchBlogById, FetchBlogBySlug, UpdateBlog, DeleteBlog };
