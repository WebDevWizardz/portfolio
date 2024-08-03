import { defineType, defineField } from 'sanity';

export const reel = defineType({
      type: "document",
      name: "reel",
      fields: [
            defineField({
                  type: "string",
                  name: "name",
                  title: "Name",
            }),
            defineField({
                  type: "slug",
                  name: "slug",
                  title: "Slug",
                  options: { source: "name" },
            }),
            defineField({
                  type: 'file',
                  name: 'file',
            })
      ],
});