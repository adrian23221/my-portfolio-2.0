export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "dateFrom",
      title: "DateFrom",
      type: "string",
    },
    {
      name: "dateEnd",
      title: "DateEnd",
      type: "string",
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      title: "DataStarted",
      name: "dataStarted",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "dataEnded",
      title: "DataEnded",
      type: "text",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "skill" },
        },
      ],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
