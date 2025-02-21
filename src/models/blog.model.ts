import { model, Model, Schema } from "mongoose";
import { BlogSchemaDto } from "../dtos/blog.dto";

const blogSchema: Schema<BlogSchemaDto> = new Schema({
    webflowId: { type: String },
    cmsLocaleId: { type: String },
    lastPublished: { type: String },
    lastUpdated: { type: String },
    createdOn: { type: String },
    isArchived: { type: Boolean },
    isDraft: { type: Boolean },
    fieldData: {
        featuredBlog: { type: Boolean, default: false },
        popularBlog: { type: Boolean, default: false },
        trendingBlog: { type: Boolean, default: false },
        readTime: { type: String },
        description: { type: String },
        name: { type: String, required: true },
        slug: { type: String, required: true },
        category: { type: String },
        thumbnail: {
            fileId: { type: String },
            url: { type: String },
            alt: { type: String },
        },
        banner: {
            fileId: { type: String },
            url: { type: String },
            alt: { type: String },
        },
        tag: { type: String },
    },
});

const Blog: Model<BlogSchemaDto> = model("Blog", blogSchema);

export default Blog;
