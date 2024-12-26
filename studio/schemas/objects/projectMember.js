export default {
  type: "object",
  name: "projectMember",
  title: "Project Member",
  fields: [
    {
      title: "Person",
      name: "teamMember",
      type: "reference",
      to: { type: "teamMember" },
    },
    {
      title: "Roles",
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Designer", value: "designer" },
          { title: "Developer", value: "developer" },
          { title: "Editor", value: "editor" },
          { title: "Manager", value: "manager" },
        ],
      },
    },
  ],
  preview: {
    select: {
      personName: "teamMember.name",
      roles: "roles",
      media: "teamMember.image",
    },
    prepare(data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join("/"),
      };
    },
  },
};
