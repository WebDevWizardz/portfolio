import { defineType, defineField, defineArrayMember } from 'sanity';

export const project = defineType({
  type: "document",
  name: "project",
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
      type: "object",
      name: "description",
      title: "Description",
      fields: [
        defineField({
          type: "array",
          name: "type",
          title: "Type",
          of: [
            defineArrayMember({
              type: "string",
            }),
          ],
        }),
        defineField({
          type: "string",
          name: "stage",
          title: "Stage",
        }),
        defineField({
          type: "array",
          name: "deliverables",
          title: "Deliverables",
          of: [
            defineArrayMember({
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      type: "text",
      name: "shortBio",
      title: "Short Bio",
    }),
    defineField({
      type: "array",
      name: "tags",
      title: "Tags",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "boolean",
      name: "isComingSoon",
      title: "Is Coming Soon",
    }),
    defineField({
      type: "array",
      name: "images",
      title: "Images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});