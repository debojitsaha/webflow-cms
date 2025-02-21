import { Types } from "mongoose";
import { BlogDto, UpdateBlogDto } from "../dtos/blog.dto";
import Blog from "../models/blog.model";

const createBlog = async (blog: BlogDto) => {
    return Blog.create(blog);
};

const fetchtBlogs = async () => {
    return Blog.find();
};

const fetchtBlogById = async (id: Types.ObjectId) => {
    return Blog.findById(id);
};

const fetchBlogBySlug = async (slug: string) => {
    return Blog.findOne({ "fieldData.slug": slug });
};

const updateBlog = async (id: Types.ObjectId, blog: UpdateBlogDto) => {
    return Blog.findByIdAndUpdate(id, { $set: Object.fromEntries(Object.entries(blog).map(([key, value]) => [`fieldData.${key}`, value])) }, { new: true });
};

const deleteBlog = async (id: Types.ObjectId) => {
    return Blog.findByIdAndDelete(id);
};

export { createBlog, fetchtBlogs, fetchtBlogById, fetchBlogBySlug, updateBlog, deleteBlog };
