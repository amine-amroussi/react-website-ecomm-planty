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
