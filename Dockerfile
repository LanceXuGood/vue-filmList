# 搭建基础容器
FROM bb69ddf89cd1

# 将工作目录设置为 /app
WORKDIR /app

# 将当前目录内容复制到位于 /app 中的容器中
ADD . /app

RUN ls
RUN nodejs -v
RUN npm -v

# 启动项目
RUN npm install

# webpack
RUN npm run build

# 复制dist
RUN cp -r  /app/dist/*   /var/www/test


# 使端口 80 可供此容器外的环境使用
EXPOSE 80

# 定义环境变量
ENV NAME prd

# 在容器启动时运行
# CMD ["nginx"]
