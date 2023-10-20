const HeadermenuTab = [
  { id: 1, name: "Home", subTab: null, href: "/" },
  {
    id: 2,
    name: "About Us",
    subTab: [
      {
        id: 1,
        name: "Introduction",
        href: "/about-us/introduction",
      },
      {
        id: 2,
        name: "Why choose us",
        href: "/about-us/whyChooseUs",
      },
      {
        id: 3,
        name: "Blog",
        href: "/blog",
      },
      {
        id: 4,
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  { id: 3, name: "Products", subTab: null },
  { id: 4, name: "Careers", subTab: null },
  { id: 5, name: "Countries", subTab: null },
];

export default HeadermenuTab;
