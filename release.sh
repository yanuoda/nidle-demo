#!/bin/bash
printf "开始编译构建\n"

# printf "删除node_modules\n"
# rm -rf node_modules

printf "删除dist\n"
rm -rf dist;

# printf "安装依赖包\n"
# cnpm install;

printf "编译构建\n"
npm run build;

printf "编译构建结束\n"
