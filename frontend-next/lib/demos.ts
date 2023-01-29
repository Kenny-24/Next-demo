type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item = 
  {
    name: 'Layouts',
    items: [
      {
        name: 'Home',
        slug: '',
        description: 'Home',
      },
      {
        name: 'Text',
        slug: 'text',
        description: 'Text',
      },

      {
        name: 'Todo',
        slug: 'todos',
        description:
          'Todo List',
      },
      {
        name: 'Search',
        slug: 'search',
        description:
          'Search Content',
      },
      {
        name: 'Chat',
        slug: 'chat',
        description:
          'Chat Content',
      },
      {
        name: '禁用',
        slug: 'root-layouts',
        description: 'isDisabled',
        isDisabled: true,
      },
    ],
  }
  // {
  //   name: 'File Conventions',
  //   items: [
  //     {
  //       name: 'Loading',
  //       slug: 'loading',
  //       description:
  //         'Create meaningful loading UI for specific parts of an app',
  //     },
  //     {
  //       name: 'Error',
  //       slug: 'error-handling',
  //       description: 'Create error UI for specific parts of an app',
  //     },
  //   ],
  // },
  // {
  //   name: 'Components',
  //   items: [
  //     {
  //       name: 'Hooks',
  //       slug: 'hooks',
  //       description:
  //         'Preview the hooks available for Client and Server Components',
  //     },
  //     {
  //       name: 'Client Context',
  //       slug: 'context',
  //       description:
  //         'Pass context between Client Components that cross Server/Client Component boundary',
  //     },
  //   ],
  // },
  // {
  //   name: 'Styling',
  //   items: [
  //     {
  //       name: 'CSS and CSS-in-JS',
  //       slug: 'styling',
  //       description: 'Preview the supported styling solutions',
  //     },
  //   ],
  // },
;
