const HeadermenuTab = [
  { id: 1, name: "Home", subTab: null, href: "/" },
  {
    id: 2,
    name: "About Us",
    href: "/about-us/introduction",
    subTab: [
      {
        id: 1,
        name: "Introduction",
        href: "/about-us/introduction",
      },
      {
        id: 2,
        name: "Why choose us",
        href: "Why",
      },
      {
        id: 3,
        name: "Blog",
        href: "https://gmefinance.com/blogs",
      },
      {
        id: 4,
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  { id: 3, name: "Products", subTab: null, href: "/products" },
  { id: 4, name: "Careers", subTab: null, href: "/careers" },
  { id: 5, name: "Countries", subTab: null, href: "/countries" },
];

export default HeadermenuTab;
