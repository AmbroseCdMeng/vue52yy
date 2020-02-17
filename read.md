# vue52yy 项目构建
     
> 项目开发环境搭建及开发过程记录
 
## vue-cli 环境初始化
 
- 使用 `npm i -g @vue-cli` 安装最新版 vue-cli 脚手架
- 基于 vue-cli 创建 vue 项目
	 - 使用命令 `vue create 项目名称` 交互式命令创建 vue 项目
		 - please pick a preset:
		   - [ ] default(babel, eslint)
		   - [x] manually select features
		 - check the features needed for your project:
		   - [ ] Babel
		   - [ ] TypeScript
		   - [ ] Progressive Web App (PWA) Support
		   - [x] Router
		   - [ ] Vuex
		   - [ ] CSS Pre-processors
		   - [x] Linter / Formatter
		   - [ ] Unit / Testing
		   - [ ] E2E Testing
		 - use history mode for router?
		   - [ ] y
		   - [x] n
		 - Pick a linter / formatter config:
		   - [ ] ESLint with error prevention only
		   - [ ] ESLint + Airbnb config
		   - [x] ESLint + Standard config
		   - [ ] ESLint + Prettier
		 - Pick additional lint:
		   - [x] Lint on save
		   - [ ] Lint and fix on commit
		 - Where do you prefer placing config for Babel, ESLint, etc.？
		   - [x] In dedicated config files
		   - [ ] In package.json
		 - Save this as a preset for future projects?
		   - [ ] y
		   - [x] n
 
	 - 使用命令 `vue ui` 图形化界面创建 vue 项目
	 - 使用命令 `npm i -g @vue/cli-init` 和 `vue init webpack 项目名称` 创建基于 2.x 版本的旧版 vue 项目
 
## vue-cli 环境运行
- 使用命令 `cd 项目目录` 进入项目根目录
- 使用命令 `npm run serve` 启动项目
- 使用命令 `npm run build` 编译打包项目
 
## 配置文件

### vue 相关的配置

 - 直接在 `package.json` 文件中添加配置（不推荐）
   
   在 `package.json` 文件下新增 `"vue"` 节点，如下：
   
	```json
	{
	  "vue": {
		"devServer":{
		  "port":8888,
		  "open":true
		}
	  }
	}
	```
  - 通过项目根目录下创建 `vue.config.js` 单独的配置文件进行配置（推荐）
 
    在该文件中进行相关配置，从而覆盖默认配置，如下：
    ```js
	module.exports = {
		devServer:{
			port: 8888,
		}
	}
    ```
    
## Element 组件库

- 安装 element 组件库
	- 使用命令 `npm i element-ui -S` 局部安装
- 导入相关资源
	```js
	import ElementUI from "element-ui";
	import 'element-ui/lib/theme-chalk/index.css'

	Vue.use(ElementUI)
	```
	
## Axios 插件

- 安装 axios 插件
    - 使用命令 `npm install --save axios vue-axios` 局部安装
