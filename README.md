## 电影小站

- #### 技术栈

	> **nodejs + vuejs + mongodb + bootstrap**

- #### 开发准备
	
	* 安装 **[mongodb](https://www.mongodb.com/)** 和 **[nodejs](https://nodejs.org/en/)**

- #### 所依赖模块

		npm install express
		npm install hbs
		npm install mongoose  
		npm install moment
		bower install bootstrap
		npm install body-parser

	> **Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具**  
	**moment 是对日期格式化的一个模块**  
	**hbs是一个模板引擎，用于方便创建动态页面**  
	**rexpress项目中通常使用body-parser进行post参数的解析**


--------------------------

- #### 入口文件

	* `res.sendfile()` 发送文件，但只能是静态页面

	* **发送动态页面**

		- 安装模板引擎模块

				var hbs = require('hbs');
				app.set('view engine', 'html');   // 指定模板文件的后缀名为html
		
		- 渲染文件：此时render中就可以不写文件后缀，且render的第二个参数为要发送到index的数据，在index模板中用 {{name}} 来接收（render默认会加载跟目录下的views目录下的东西）

```js
	app.get('/', function(req, res) {
		res.render('index', {
			name: 'xmg'
		})
	})
```
				
		> 可以先建一个js文件用来模拟数据，建好基本框架后再上数据库
		
- #### **[mongodb](https://www.mongodb.com/)** 和 **mongoose**

	> ##### mongoose是运行在nodejs上的，提供面向对象模式操作mongodb数据库的API#####

	* 启动数据库

		在某位置建立文件夹如下

			+-- data
			| +-- db
			| +-- log 
			+ --
		
		cmd执行命令(记得先加入环境变量)： **`mongod --dbpath=C:\data\db`**

		查看连接情况：`mongo`  
		默认连接端口为：`27017`


	* **mongoose**

		* 基本操作 

``` js
	//建立数据库模式schema
	var kittySchema = mongoose.Schema({
	name: String,
	age: String
	});
```

``` js
	//添加一些方法，会暴露给model生成后的实例
	kittySchema.methods.speak = function () {
    	var greeting = this.name
       		? "Meow name is " + this.name
       		: "I don't have a name";
    		console.log(greeting);
	}
```

``` js
	//生成模型
	var Cat = mongoose.model('Cat', kittySchema);
```

``` js
	//利用模型生成实例
	var kitty = new Cat({
	    name: 'Zildjian',
	    age: 12
	});
	//此实例也具有了刚才在schema中定义的方法
	kitty.speak();
	//且添加的数据可以直接通过实例的属性访问
	console.log(kitty.age);
```

**`Schema`、`Model`、`Entity`的关系请牢记，`Schema`生成`Model`，`Model`创造`Entity`，`Model`和`Entity`都可对数据库操作造成影响，但`Model`比`Entity`更具操作性。**

- #### 运行项目

	* 运行根目录下的app.js即可

	* > node app.js
