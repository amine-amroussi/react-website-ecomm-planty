export const sidebarLinks = [
  {
    _id: 4,
    title: "Dashboard",
    url: "/admin-panel",
  },
  {
    _id: 1,
    title: "Products",
    url: "/admin-panel/products",
    children: [
      { id: 1, title: "List View", url: "/admin-panel/products-list" },
      { id: 2, title: "Grid View", url: "/admin-panel/products-grid" },
      { id: 3, title: "create product", url: "/admin-panel/create-product" },
    ],
  },
  {
    _id: 2,
    title: "Orders",
    url: "/admin-panel/orders",
  },
  {
    _id: 3,
    title: "Users",
    url: "/admin-panel/users",
  },
  {
    _id: 5,
    title: "E-Mail",
    url: "/admin-panel/email",
    children: [
      {
        id: 1,
        title: "Send Single Email",
        url: "/admin-panel/send-single-email",
      },
      {
        id: 2,
        title: "Send Email For All",
        url: "/admin-panel/send-all-users",
      },
    ],
  },
  {
    _id: 6,
    title: "Back to store",
    url: "/",
  },
];

export const chooseCategories = [
  {
    _id: 1,
    title: "Tree",
  },
  {
    _id: 1,
    title: "Tree",
  },
  {
    _id: 1,
    title: "Tree",
  },
  {
    _id: 1,
    title: "Tree",
  },
  {
    _id: 1,
    title: "Tree",
  },
];
