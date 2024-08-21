import { z } from "zod";
import { EXCLUDE_CHAR } from "../constants/ParamConst";

export const postSchema = z.object({
  experience: z
    .string()
    .transform((value) => value.replace(/[\s\n・]/g, ""))
    .pipe(
      z
        .string()
        .min(10, { message: "10文字以上で入力してください" })
        .max(1500, { message: "1500文字以内で入力してください" })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: "使用できない記号が含まれています",
        })
    ),
  goodPoints: z
    .string()
    .transform((value) => value.replace(/[\s\n・]/g, ""))
    .pipe(
      z
        .string()
        .min(10, { message: "10文字以上で入力してください" })
        .max(1500, { message: "1500文字以内で入力してください" })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: "使用できない記号が含まれています",
        })
    ),
  badPoints: z
    .string()
    .transform((value) => value.replace(/[\s\n・]/g, ""))
    .pipe(
      z
        .string()
        .min(10, { message: "10文字以上で入力してください" })
        .max(1500, { message: "1500文字以内で入力してください" })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: "使用できない記号が含まれています",
        })
    ),
  improvement: z
    .string()
    .transform((value) => value.replace(/[\s\n・]/g, ""))
    .pipe(
      z
        .string()
        .min(10, { message: "10文字以上で入力してください" })
        .max(1500, { message: "1500文字以内で入力してください" })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: "使用できない記号が含まれています",
        })
    ),
  lesson: z
    .string()
    .transform((value) => value.replace(/[\s\n・]/g, ""))
    .pipe(
      z
        .string()
        .min(10, { message: "10文字以上で入力してください" })
        .max(1500, { message: "1500文字以内で入力してください" })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: "使用できない記号が含まれています",
        })
    ),
  category: z.string().optional(),
  private: z.boolean(),
});

export type PostScheme = z.infer<typeof postSchema>;
