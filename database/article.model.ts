import { model, models, Schema, Document } from "mongoose";

export interface IArticle {
  title: string;
  content: string;
  image: string;
  category: string;
}

export interface IArticleDoc extends IArticle, Document {}
const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Article = models?.Article || model<IArticle>("Article", ArticleSchema);

export default Article;
