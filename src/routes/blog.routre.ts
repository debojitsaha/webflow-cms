import { Router } from "express";
import { CreateBlog, DeleteBlog, FetchBlogBySlug, FetchBlogById, FetchBlogs, UpdateBlog } from "../controllers/blog.controller";

const blogRouter: Router = Router();

blogRouter.post("/", CreateBlog);
blogRouter.get("/", FetchBlogs);
blogRouter.get("/:id", FetchBlogById);
blogRouter.get("/slug/:slug", FetchBlogBySlug);
blogRouter.put("/:id", UpdateBlog);
blogRouter.delete("/:id", DeleteBlog);

export default blogRouter;
