export const sampleChats = [
    {
        avatar: ["https://w3schools.com/howto/img_avatar.png"],
        name: "john doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://w3schools.com/howto/img_avatar.png"],
        name: "john pie",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],
    },
];

export const sampleUsers = [
    {
        avatar: "https://w3schools.com/howto/img_avatar.png",
        name: "john doe",
        _id: "1",
    },
    {
        avatar: "https://w3schools.com/howto/img_avatar.png",
        name: "john pie",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
            avatar: "https://w3schools.com/howto/img_avatar.png",
            name: "john doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: "https://w3schools.com/howto/img_avatar.png",
            name: "john pie",
        },
        _id: "2",
    }
];

export const sampleMessage=[
    {
        attachments:[],
        content:"message hai",
        _id:"fsdfsfdsfsd",
        sender:{
            _id:"user._id",
            name:"chaman",
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },
    {
        attachments:[
            {
                public_id:"aasdsd 2",
                url: "https://w3schools.com/howto/img_avatar.png",
            },
        ],
        content:"",
        _id:"fsdfsfdskhkfsd",
        sender:{
            _id:"hjkhjkhk",
            name:"chaman 2",
        },
        chat:"chatId",
        createdAt:"2024-02-12T10:41:30.630Z",
    },

];

export const dashboardData={
    users:[
        {
            name:"john doe",
            avatar:"https://w3schools.com/howto/img_avatar.png",
            _id:"1",
            username:"John_Doe",
            friends:20,
            groups:5,
        },
        {
            name:"john boe",
            avatar:"https://w3schools.com/howto/img_avatar.png",
            _id:"2",
            username:"John_boe",
            friends:20,
            groups:25,
        },
    ],

    chats: [
        {
          name: "LabadBass Group",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
          _id: "1",
          groupChat: false,
          members: [
            { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
            { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          ],
          totalMembers: 2,
          totalMessages: 20,
          creator: {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
          },
        },
        {
          name: "L*Da Luston Group",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
          _id: "2",
          groupChat: true,
          members: [
            { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
            { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          ],
          totalMembers: 2,
          totalMessages: 20,
          creator: {
            name: "John Boi",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
          },
        },
      ],

      messages: [
        {
          attachments: [],
          content: "L*uda ka Message hai",
          _id: "sfnsdjkfsdnfkjsbnd",
          sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Chaman ",
          },
          chat: "chatId",
          groupChat: false,
          createdAt: "2024-02-12T10:41:30.630Z",
        },
    
        {
          attachments: [
            {
              public_id: "asdsad 2",
              url: "https://www.w3schools.com/howto/img_avatar.png",
            },
          ],
          content: "",
          _id: "sfnsdjkfsdnfkdddjsbnd",
          sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Chaman  2",
          },
          chat: "chatId",
          groupChat: true,
          createdAt: "2024-02-12T10:41:30.630Z",
        },
      ],
}