import tailwindcss from "bun-plugin-tailwind";

await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  minify: true,
  plugins: [tailwindcss],
});

await Bun.write(
  "./dist/opengraph-image.png",
  Bun.file("./src/opengraph-image.png")
);
