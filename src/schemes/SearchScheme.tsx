import { z } from "zod";
import { EXCLUDE_CHAR } from "../constants/ParamConst";
import generateMessage from "@/logics/functions/GenerateMessage";
import { MESSAGE_TEMPLATE } from "@/constants/MessageTemplateConst";

const MAX_CHARS = 30;

export const searchSchema = z.object({
  search: z
    .string()
    .max(MAX_CHARS, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
        String(MAX_CHARS),
      ]),
    })
    .refine((value) => !EXCLUDE_CHAR.test(value), {
      message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
    }),
  category: z.string().optional(),
  job: z.string().optional(),
  sort: z.string().optional(),
});

export type SearchScheme = z.infer<typeof searchSchema>;
