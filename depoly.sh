#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建静态文件
yarn build

# 进入生成的文件夹
cd blog/.vuepress/dist

# 发布到自定义域名，没有可注释掉
# echo 'example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Echo-Ji/blogs.git master:gh-pages

cd -