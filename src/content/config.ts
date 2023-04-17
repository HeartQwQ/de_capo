import { z, defineCollection } from 'astro:content';
import { Author } from '@/consts';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default(Author),
    sortOrder: z.number(),
    categories: z.string(),
    tags: z.array(z.string()),
    pubDate: z.date().transform(date => dayjs(date).format('YYYY/MM/DD')),
    topping: z.boolean().default(false),
    length: z.number(),
    img:z.string().default('https://img.timelessq.com/images/2022/07/26/c22bb7736559a7554506b05203018145.jpg')
  }),
});

export const collections = { docs };