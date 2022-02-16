/* eslint-disable linebreak-style */
export const initialState = {
  currentUser: {
    isAdmin: false,
    name: 'John',
    email: 'abc@test.com',
    phone: '789-456-123',
  },
  isLogged: true,
  posts: {
    data: [
      {
        id: '1',
        title: 'Announcement 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-09',
        lastUpdate: '2022-02-10',
        authorId: '1',
        authorName: 'John',
        authorEmail: 'abc@test.com',
        status: 'draft',
        location: 'Warszawa',
        price: 155,
        phone: '789-456-12',
        image: 'https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageTitle: 'Image title 1',
      },
      {
        id: '2',
        title: 'Announcement 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-09',
        lastUpdate: '2022-02-09',
        authorId: '1',
        authorName: 'Jack',
        authorEmail: 'test@test.pl',
        status: 'draft',
        location: 'Warszawa',
        price: 200,
        phone: '123-222-333',
        image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        imageTitle: 'Image title 2',
      },  
      {
        id: '3',
        title: 'Announcement 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-08',
        lastUpdate: '2022-02-09',
        authorId: '1',
        authorName: 'Jack',
        authorEmail: 'test@test.pl',
        status: 'draft',
        location: 'Warszawa',
        price: 50,
        phone: '123-234-123',
        image: 'https://images.unsplash.com/photo-1602267774924-38124c047174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageTitle: 'Image title 3',
      },
      {
        id: '4',
        title: 'Announcement 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-06',
        lastUpdate: '2022-02-07',
        authorId: '2',
        authorName: 'Lucas',
        authorEmail: 'test@test.pl',
        status: 'draft',
        location: 'Katowice',
        price: 120,
        phone: '567-456-213',
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageTitle: 'Image title 4',
      },
      {
        id: '5',
        title: 'Announcement 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-02',
        lastUpdate: '2022-02-03',
        authorId: '2',
        authorName: 'Lucas',
        authorEmail: 'test@test.pl',
        status: 'draft',
        location: 'Katowice',
        price: 170,
        phone: '567-456-213',
        image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageTitle: 'Image title 5',
      },
      {
        id: '6',
        title: 'Announcement 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publicationDate: '2022-02-05',
        lastUpdate: '2022-02-07',
        authorId: '2',
        authorName: 'Lucas',
        authorEmail: 'test@test.pl',
        status: 'draft',
        location: 'Katowice',
        price: 370,
        phone: '512-345-578',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageTitle: 'Image title 6',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
