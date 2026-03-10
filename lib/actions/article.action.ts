"use server";
import { AskQuestionSchema, GetArticleSchema } from "@/validations";
import action from "../handlers/action";
import { cache } from "react";
import mongoose, { FilterQuery, Types } from "mongoose";
import handleError from "../handlers/error";

import { Article } from "@/database";

export async function createArticle(
  params: CreateQuestionParams
): Promise<ActionResponse<Question>> {
  const validationResult = await action({
    params,
    schema: AskQuestionSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { title, content, category, image } = validationResult.params!;
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const [article] = await Article.create(
      [
        {
          title,
          content,
          category,
          image,
        },
      ],
      { session }
    );
    await session.commitTransaction();

    if (!article) throw new Error("Failed to create the article");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(article)),
    };
  } catch (error) {
    await session.abortTransaction();
    return handleError(error) as ErrorResponse;
  } finally {
    await session.endSession();
  }
}

export const getQuestion = cache(async function getQuestion(
  params: GetQuestionParams
): Promise<ActionResponse<Question>> {
  const validationResult = await action({
    params,
    schema: GetArticleSchema,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { questionId } = validationResult.params!;

  try {
    const question = await Article.findById(questionId)
      .populate("tags", "_id name")
      .populate("author", "_id name image");

    if (!question) throw new Error("Question not found");

    return { success: true, data: JSON.parse(JSON.stringify(question)) };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
});
