#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

read -p "What is your update comment: " comment
# echo "$comment"

# 运行脚本时打印出来
set -v 

git add -A
git commit -m "$comment"
git push
