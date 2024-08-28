import { compareDesc, parseISO } from "date-fns";

export const cx = (...className) => className.filter(Boolean).join(" ");

export const sortBlog= (blog) => blog.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
