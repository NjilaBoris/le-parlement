"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { AskQuestionSchema } from "@/validations";
import { Button } from "../ui/button";
import { IconReload } from "@tabler/icons-react";

import { ACCEPTED_IMAGE_TYPES } from "@/constant";
import { ImageIcon } from "lucide-react";
import FileUploader from "../FileUploader";
import { z } from "zod";
import { createArticle } from "@/lib/actions/article.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

const PostForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef<MDXEditorMethods>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      image: undefined,
    },
  });

  const handleCreatePost = async (data: z.infer<typeof AskQuestionSchema>) => {
    startTransition(async () => {
      const result = await createArticle(data);
      if (result.success) {
        toast.success("Article created successfully!");
        form.reset();
        if (result.data) router.push(ROUTES.ARTICLES(result.data._id));
      } else {
        toast.error(result.error?.message || "Failed to create article.");
      }
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreatePost)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Blog Title <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular text-neutral-500   no-focus min-h-[45px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-1">
                Be breif and descriptive with your title to attract readers.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Categories <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className=" text-neutral-500   no-focus min-h-[45px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-1">
                Add relevant categories to help readers find your content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FileUploader
              value={field.value}
              fieldChange={field.onChange}
              label="Cover Image"
              acceptTypes={ACCEPTED_IMAGE_TYPES}
              icon={ImageIcon}
              placeholder="Click to upload cover image"
              hint="This image will be displayed as the cover for your blog post."
              disabled={isSubmitting}
            />
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Content <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  editorRef={editorRef}
                  value={field.value}
                  fieldChange={field.onChange}
                />
              </FormControl>
              <FormDescription className="body-regular mt-1">
                Enter the full content of your blog post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-16 flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className=" p-4 bg-blue-600 hover:bg-blue-500 w-fit !text-light-900"
          >
            {isPending ? (
              <>
                <IconReload className="mr-2 size-4 animate-spin" />
                <span>Submitting</span>
              </>
            ) : (
              <>Post a Article</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
