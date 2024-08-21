import { z } from "zod";
import { EXCLUDE_CHAR } from "../constants/ParamConst";

export const searchSchema = z.object({
  search: z
    .string()
    .max(30, { message: "30文字以内で入力してください" })
    .refine((value) => !EXCLUDE_CHAR.test(value), {
      message: "使用できない記号が含まれています",
    }),
});

export type SearchScheme = z.infer<typeof searchSchema>;
