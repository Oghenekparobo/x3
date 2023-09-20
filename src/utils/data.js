export const unsplashImages = [
  {
    id: "unsplash-1",
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-2",
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-3",
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-4",
    url: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-5",
    url: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  },
  {
    id: "unsplash-6",
    url: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-7",
    url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHw1fHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-8",
    url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  },
  {
    id: "unsplash-9",
    url: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  },
  {
    id: "unsplash-10",
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHw4fHxvZmZpY2V8ZW58MHx8fHwxNjk1MjAzNDQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "unsplash-11",
    url: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  },
  {
    id: "unsplash-12",
    url: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU0OTZ8MHwxfHNlYXJjaHwxMHx8b2ZmaWNlfGVufDB8fHx8MTY5NTIwMzQ0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export const sortList = (list) => {
  const list1 = list
    ?.slice()
    .sort((first, second) => first.order - second.order);
  const list2 = list1.map((l, index) => ({ ...l, order: index }));
  return list2;
};
