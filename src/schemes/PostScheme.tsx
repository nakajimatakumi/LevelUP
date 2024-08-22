import { z } from "zod";
import { EXCLUDE_CHAR } from "../constants/ParamConst";
import { MESSAGE_TEMPLATE } from "../constants/MessageTemplateConst";
import generateMessage from "@/logics/functions/GenerateMessage";

/* パラメータの定義 */
const MAX_LINES = 10;
const MIN_CHARS = 10;
const MAX_CHARS = 1500;
const REPLACE_CHAR = /・/g;

export const postSchema = z.object({
  experience: z
    .string()
    .refine((value) => value.split("\n").length <= MAX_LINES, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_LINES_MESSAGE, [
        String(MAX_LINES),
      ]),
    })
    .transform((value) => value.replace(REPLACE_CHAR, ""))
    .pipe(
      z
        .string()
        .min(MIN_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MIN_CHARS_MESSAGE, [
            String(MIN_CHARS),
          ]),
        })
        .max(MAX_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
            String(MAX_CHARS),
          ]),
        })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
        })
    ),
  goodPoints: z
    .string()
    .refine((value) => value.split("\n").length <= MAX_LINES, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_LINES_MESSAGE, [
        String(MAX_LINES),
      ]),
    })
    .transform((value) => value.replace(REPLACE_CHAR, ""))
    .pipe(
      z
        .string()
        .min(MIN_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MIN_CHARS_MESSAGE, [
            String(MIN_CHARS),
          ]),
        })
        .max(MAX_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
            String(MAX_CHARS),
          ]),
        })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
        })
    ),
  badPoints: z
    .string()
    .refine((value) => value.split("\n").length <= MAX_LINES, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_LINES_MESSAGE, [
        String(MAX_LINES),
      ]),
    })
    .transform((value) => value.replace(REPLACE_CHAR, ""))
    .pipe(
      z
        .string()
        .min(MIN_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MIN_CHARS_MESSAGE, [
            String(MIN_CHARS),
          ]),
        })
        .max(MAX_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
            String(MAX_CHARS),
          ]),
        })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
        })
    ),
  improvement: z
    .string()
    .refine((value) => value.split("\n").length <= MAX_LINES, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_LINES_MESSAGE, [
        String(MAX_LINES),
      ]),
    })
    .transform((value) => value.replace(REPLACE_CHAR, ""))
    .pipe(
      z
        .string()
        .min(MIN_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MIN_CHARS_MESSAGE, [
            String(MIN_CHARS),
          ]),
        })
        .max(MAX_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
            String(MAX_CHARS),
          ]),
        })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
        })
    ),
  lesson: z
    .string()
    .refine((value) => value.split("\n").length <= MAX_LINES, {
      message: generateMessage(MESSAGE_TEMPLATE.MAX_LINES_MESSAGE, [
        String(MAX_LINES),
      ]),
    })
    .transform((value) => value.replace(REPLACE_CHAR, ""))
    .pipe(
      z
        .string()
        .min(MIN_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MIN_CHARS_MESSAGE, [
            String(MIN_CHARS),
          ]),
        })
        .max(MAX_CHARS, {
          message: generateMessage(MESSAGE_TEMPLATE.MAX_CHARS_MESSAGE, [
            String(MAX_CHARS),
          ]),
        })
        .refine((value) => !EXCLUDE_CHAR.test(value), {
          message: MESSAGE_TEMPLATE.EXCLUDE_CHAR_MESSAGE,
        })
    ),
  category: z.string().optional(),
  private: z.boolean(),
});

export type PostScheme = z.infer<typeof postSchema>;
