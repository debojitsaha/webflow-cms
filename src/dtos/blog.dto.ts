import { Document, Types } from "mongoose";

type BlogDto = {
    webflowId: string;
    cmsLocaleId: string;
    lastPublished: string;
    lastUpdated: string;
    createdOn: string;
    isArchived: boolean;
    isDraft: boolean;
    fieldData: {
        featuredBlog: boolean;
        popularBlog: boolean;
        trendingBlog: boolean;
        readTime: string;
        tag: string;
        description: string;
        name: string;
        slug: string;
        category: string;
        thumbnail?: {
            fileId: string;
            url: string;
            alt: string;
        };
        banner: {
            fileId: string;
            url: string;
            alt: string;
        };
    };
};

interface UpdateBlogDto extends Partial<BlogDto> {}

type BlogSchemaDto = Document & BlogDto;
type UpdateBlogSchemaDto = Document & UpdateBlogDto;

export { BlogDto, UpdateBlogDto, BlogSchemaDto, UpdateBlogSchemaDto };
