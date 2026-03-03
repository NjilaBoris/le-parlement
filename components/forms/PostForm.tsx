"use client";
import { createPostSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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

const PostForm = () => {
  const form = useForm({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      createdAt: "",
      image: "",
      userFirstName: "",
      userLastName: "",
    },
  });
  const handleCreatePost = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreatePost)}
        className="flex w-full flex-col gap-10"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <FormField
            control={form.control}
            name="userFirstName"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-500">
                  FirstName <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="paragraph-regular text-neutral-500   no-focus min-h-[45px] border"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-1">
                  Enter the author&apos;s first name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userLastName"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-500">
                  LastName <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="paragraph-regular text-neutral-500   no-focus min-h-[45px] border"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-1">
                  Enter the author&apos;s last name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Content <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className=" text-neutral-500   no-focus min-h-[45px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-1">
                Enter the full content of your blog post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Upload Image <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-3">
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageUpload"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file); // send file to react-hook-form
                    }}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-blue-400 bg-blue-50 px-4 py-6 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                  >
                    Click to upload image
                  </label>
                </div>
              </FormControl>
              <FormDescription className="body-regular mt-1">
                Upload a featured image for your post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="createdAt"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-sm md:text-base text-neutral-700">
                Created Date
              </FormLabel>

              <FormControl>
                <Input
                  type="date"
                  className="min-h-[45px] bg-gray-100 text-gray-600 cursor-not-allowed"
                  {...field}
                />
              </FormControl>

              <FormDescription className="body-regular mt-1">
                This is the date the article was created.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PostForm;
