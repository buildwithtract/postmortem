import tailwindcss from "bun-plugin-tailwind";

await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  minify: true,
  plugins: [tailwindcss],
});
