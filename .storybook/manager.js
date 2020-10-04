import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const myTheme = create({
  base: "light",
  brandTitle: "TechNikhil",
  brandUrl: "https://technikhil314.surge.sh",
  brandImage: "",
});

addons.setConfig({
  theme: myTheme,
});
