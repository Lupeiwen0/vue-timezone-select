import { resolve } from "path";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const CWD = process.cwd();

export default ({ command, mode }) => {
  // 环境变量
  const { VITE_BASE_URL, VITE_APP_OUT_DIR } = loadEnv(mode, CWD);
  // const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    plugins: [vue({})],
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    // 打包配置
    build: {
      outDir: VITE_APP_OUT_DIR,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "umd",
        fileName: (format) => `index.${format}.js`,
      },
      sourcemap: true,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue", "element-plus"],
        output: {
          exports: "named",
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
            "element-plus": "element-plus",
          },
        },
      },
    },
  };
};
