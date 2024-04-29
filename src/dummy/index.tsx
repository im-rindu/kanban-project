export const dataDummy1 = {
  title: "Design weekly",
  desc: "A board to keep track of design progress.",
  listData: [
    {
      title: "Last Week",
      listColor: "bg-light-grey2",
      taskList: [
        {
          title: "Review Scope",
          desc: "Review #390.",
          label: [
            {
              color: "bg-rose",
              text: "Due 4/11",
            },
          ],
          checkList: [],
        },
        {
          title: "Team Retro",
          desc: "",
          label: [],
          checkList: [
            {
              text: "Schedule time",
              checked: true,
            },
            {
              text: "Setup figma board",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: "This Week",
      listColor: "bg-lavender",
      taskList: [
        {
          assignee: [
            "https://i.pravatar.cc/150?u=a042581f4e23022734d",
            "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          ],
          title: "Usability Test",
          desc: "Research questions with Carina.",
          label: [
            {
              color: "bg-green",
              text: "Research",
            },
          ],
          checkList: [],
        },
      ],
    },
    {
      title: "Next Week",
      listColor: "bg-rose",
      taskList: [
        {
          assignee: ["https://i.pravatar.cc/150?u=a042581f4e29026704d"],
          title: "Culture workshop",
          desc: "Let’s build a great team.",
          label: [
            {
              color: "bg-rose",
              text: "Due 4/11",
            },
          ],
          checkList: [
            {
              text: "Schedule time",
              checked: true,
            },
            {
              text: "Setup figma board",
              checked: false,
            },
            {
              text: "Review exercises with the team",
              checked: false,
            },
          ],
        },
      ],
    },
  ],
};

export const dataDummy2 = {
  title: "Personal",
  desc: "A board to keep track of personal tasks.",
  listData: [
    {
      title: "Not Started",
      listColor: "bg-light-grey2",
      taskList: [
        {
          title: "Take Coco to a vet",
          desc: "",
          label: [
            {
              color: "bg-rose",
              text: "Due 4/11",
            },
          ],
          checkList: [],
        },
      ],
    },
    {
      title: "In Progress",
      listColor: "bg-lavender",
      taskList: [
        {
          title: "Taxes 😔",
          desc: "Research questions with Carina.",
          label: [],
          checkList: [
            {
              text: "Accountant contract",
              checked: false,
            },
            {
              text: "Request work payslips",
              checked: false,
            },
            {
              text: "Cancel VAT ID",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: "Blocked",
      listColor: "bg-rose",
      taskList: [
        {
          assignee: ["https://i.pravatar.cc/150?u=a042581f4e29026704d"],
          title: "Move",
          desc: "Survive moving places in the pandemic.",
          label: [],
          checkList: [
            {
              text: "Request moving estimate",
              checked: false,
            },
            {
              text: "Order moving boxes",
              checked: true,
            },
          ],
        },
      ],
    },
    {
      title: "Done",
      listColor: "bg-green",
      taskList: [],
    },
  ],
};
