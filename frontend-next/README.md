# Next.js + Turbopack App Directory Playground

# turbopack + pnpm + next + react + typescript + tailwindcss
# Next 13.1 
### Streaming：显示即时加载状态并流式传输更新，不会阻碍UI渲染
### 客户端渲染
### 服务端渲染


# 提交规范

### feat: 新功能
### fix: 修复 bug
### docs: 只有文档改变
### style: 并没有影响代码的意义(空格，去掉分号，格式的修改等)
### refactor: 代码的修改并没有修改 bug，也没有添加新功能
### perf: 代码的修改提高的性能
### test: 添加测试
### build: 影响构建系统或外部依赖项的更改(maven,gradle,npm 等等)
### ci: 对 CI 配置文件和脚本的更改
### chore：对非 src 和 test 目录的修改
### revert: Revert a commit

# build 构建打包
### 打包好的文件默认放在/.next 文件夹里

# pnpm

### 1、pnpm install ：安装依赖
### 2、pnpm update ：更新依赖，根据指定的范围将包更新到最新版本，monorepo 项目中可以通过 --filter 来指定更新某个项目的某个包
### 3、pnpm uninstall ：删除依赖，根据指定的范围将包删除，monorepo 项目中可以通过 --filter 来指定删除某个项目的某个包
### 4、pnpm add：添加包

# tips：
### clsx 动态的 className