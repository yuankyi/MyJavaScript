function show() {
    //成对的引号(单引号,双引号,反引号)
    console.log("字符串--------");
    console.log("this is my js");
    console.log('this is my js ' + 'xx');
    console.log(`this is my js ${10 / 2}`);//模板文字可嵌入其他值

    // '\'转义符
    console.log("转义符--------");
    console.log(`this is my js \nhello world`);
    console.log("this is my js \"\\n\"");

    console.log("一元运算符--------");
    console.log(typeof 4.5);
    console.log(typeof "4.5");
    console.log(-(10 - 2));

    console.log("布尔值--------");
    console.log(3 > 2);
    //比较字符串时，JavaScript从左到右遍历字符，逐个比较它们的Unicode代码。
    console.log("Aaa" < "Zzz");
    //JavaScript中只有一个值不等于它自己，它就是NaN（“不是数字”）。
    console.log(NaN == NaN);

    console.log("逻辑运算符--------");
    console.log(true && false);
    console.log(true || false);
    console.log(!true);

    console.log("三元运算符--------");
    console.log(true ? 1 : 0);

    console.log("空值--------");
    console.log(null);
    console.log(undefined);
    console.log(null == undefined);
    console.log(null === undefined);

    //JavaScript将使用一组规则将此值默不作声地转换为所需的类型
    console.log("自动类型转换--------");
    //0和""会转为false
    console.log("" == false);
    console.log(0 == false);
    console.log(NaN == false);
    console.log(-1 == false);
    //判断值是否为空值
    console.log(null == 0);
    //当你不希望发生任何自动类型转换时，可以用两个额外的运算符：===和！==。
    console.log("" === false);

    console.log("逻辑运算符的短路");
    //返回终止逻辑的值
    console.log(null || "agent");
    console.log("aaa" || "agent");
    console.log(null && "agent");
    console.log("aaa" && "agent");

}

function process() {
    //定义 绑定/变量
    let xx = 4;
    console.log(xx * xx);

    //单个let定义多个绑定,逗号隔开
    //绑定名称可以包含美元符号（$）或下划线（_），但不能包含其他标点符号或特殊字符。
    let $aa = 1, _bb = 3;
    console.log($aa + _bb);

    //定义常量
    const cc = 123;
    console.log(cc);

    //prompt函数在现代Web编程中使用不多，主要是因为你无法控制它生成的对话框的外观，但它在示例程序和实验中非常有用。
    //函数Number将值转换为数字。失败会返回NaN
    let input = Number(prompt("enter a number"));

    //条件执行
    if (!Number.isNaN(input)) {
        console.log("your number is " + input);
    }
    else {
        console.log("you should input a number");
    }

    //for循环
    for (let i = 0; i < 2; i++) {
        console.log("for: " + i);
    }
    //循环遍历数组
    let l = [11, 22, 33];
    for(let a of l)
    {
        console.log(a);
    }
    //foreach
    l.forEach(m=>console.log("foreach:" + m));

    //switch调度
    let s = "a";
    switch (s) {
        case "a":
            console.log("aaaa");
            break;
        default:
            console.log("you input " + s);
            break;
    }
}

function myfun() {
    //1. 函数作为值,可以传递
    //保存函数的绑定如果不是const, 还可以重新赋值
    const makeNoise = function () {
        console.log("make noise");
    };
    //完全没有return语句的函数，例如makeNoise，同样返回undefined。 
    console.log(makeNoise());

    //2. 声明表示法
    //即使函数是在使用它的代码下面定义的，前面的代码也可以工作。函数声明不是常规的从上到下控制流程的一部分。
    //它们在概念上被移到了它们的作用域的顶部，可以由此作用域内的所有代码使用。
    console.log(square(5));
    function square(x) {
        return x * x;
    };

    //3. 箭头函数/匿名函数
    const power = x=>x * x;
    console.log(power(6));

    ////可选参数和默认参数
    ////***赋默认值时,编译器报错了,运行没问题***
    function myParam(a, b, c/*=333*/) {
        console.log(a);
        console.log(b);
        console.log(c);
    };
    myParam(111);

    //闭包
    //这个能够引用封闭作用域中局部绑定的特定实例的功能被称为闭包（closure）。
    //引用其周围局部作用域的绑定的一个函数称为一个闭包。 一个封闭独立的函数,拥有自己的上下文环境
    //一个好的思路模型是将函数值视为同时包含其函数体内的代码和创建它们的环境。调用时，函数体会看到创建它的环境，而不是调用它的环境。
    function wrapvalue(n) {
        return x=>n * x;//这个函数就是闭包
    };
    let twice = wrapvalue(2);
    console.log(twice(11));
    console.log(twice(22));

    //纯函数
    //一种特定的产生值的函数，它不仅没有副作用，而且不依赖于其他代码的副作用
}

function dataStructure() {
    //数组
    let list = [1, 3, 5, 66, 3, 99];
    list.pop();//末尾删除
    list.push(200);//末尾添加
    list.shift();//开头删除
    list.unshift(300);//开头添加
    console.log(list[1]);
    console.log(list.indexOf(3));
    console.log(list.lastIndexOf(3));
    console.log(list);

    //属性
    //几乎所有JavaScript值都具有属性，但null和undefined除外。
    //console.log(null.length);
    //->Uncaught TypeError: null has no properties

    //在JavaScript中访问属性的两种主要方法是使用句点和方括号。value.x和value[x]都访问值上的属性，
    let xx = { color: "red" };
    console.log(xx["color"]);
    console.log(xx.color);
    //数组中的元素存储为数组的属性，使用数字作为属性名称
    //包含索引的绑定必须使用[]
    console.log(list[2 - 1]);

    //方法
    //包含函数的属性称为它们所属值的方法
    //特殊的属性
    xx.show = () =>console.log("my color is " + xx.color);
    xx.show();

    //对象
    //类型对象的值是属性的任意集合
    //对于不是有效绑定名称或有效数字的属性名，必须用引号将其括起来。
    let desc = {
        work: "went to work",
        "get out": "get out of the house"
    }
    console.log(typeof desc);
    console.log(desc.work);
    console.log(desc["get out"]);
    console.log(desc.buy);//undefined
    desc.buy = "buy a house";//添加新属性
    console.log(desc.buy);
    //遍历属性
    console.log(Object.keys(desc));
    //复制全部属性
    let newDesc = { sell: "sell my house" };
    Object.assign(newDesc, desc);
    console.log(newDesc);
    //delete 可以删除属性,不常用
    delete desc.buy;
    console.log(desc.buy);//undefined

    //绑定保存的是对象的地址,==比较的是地址
    //const对象的属性值是可以改变的

    //字符串
    //字符串不能新增属性
    let str = "good job ";
    console.log(str.slice(1, 2));
    //字符串的indexOf方法可以搜索包含多个字符的字符串，而同名的数组方法只查找单个元素
    console.log(str.indexOf("oo"));
    console.log(str.trim());
    console.log(str.split(" "));
    console.log(str.repeat(3));
    console.log(str.padStart(13, "0"));//补齐

    //剩余参数
    //最后一个参数前加...
    function max(a, b, ...c) {
        console.log(c);
        let r = -Infinity;
        r = Math.max(a, b);
        for(let cc of c)
        {
            r = Math.max(cc, r);
        }
        console.log("max is " + r);
    }
    let arr = [9, 18, 0];
    //a匹配3,b匹配5,剩余的参数都是c
    max(3, 5, 1, ...arr);//...将数组展开

    //Math
    let ran = Math.random();
    console.log("random " + ran);//0<=random<1;
    console.log(Math.floor(ran * 10));
    console.log(Math.ceil(ran * 10));

    ////解构
    ////***编译器报错,可以运行***
    //let {name}={name:"haha",age:13};
    //console.log(name);

    //Json
    let item = { name: 'hana', age: 13, hobby: ["run", "swim"] };
    let json = JSON.stringify(item);
    console.log("json: " + json);
    let newitem = JSON.parse(json);
    console.log(newitem.hobby);
}

function myAdvanceFunc() {
    //高阶函数
    //操作函数的函数
    //将函数作为参数或返回新函数
    function repeat(num, action) {
        for (let i = 0; i < num; i++) {
            action(i);
        }
    }
    function unless(test, then) {
        if (test) then();
    }
    repeat(3, console.log);
    repeat(5, n=> { unless(n % 2 == 0, () =>console.log(n + " is even")) });

    function greaterThan(a) {
        return m=>m > a;
    }
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(2));
    console.log(greaterThan10(12));

    let list = [
        { name: "Ama", age: 10 },
        { name: "Beta", age: 12 },
        { name: "Candy", age: 15 }
    ];
    console.log(list.filter(m=>m.age < 13));
    console.log(list.map(m=>"this is " + m.name));

    var arr = [1, 2, 3, 4];
    console.log(arr.reduce((x, y) =>x + y));
}

function myObject() {
    let empty = {};
    console.log(empty.toString);
    console.log(empty.toString());
    console.log(Object.getPrototypeOf(empty));
    console.log(Object.getPrototypeOf(empty.toString));
    console.log(Object.getPrototypeOf(empty.toString()));
    console.log(Object.getPrototypeOf({}) == Object.prototype);
    console.log(Object.getPrototypeOf([]) == Array.prototype);

    class Rabbit {
        constructor(name) {
            this.name = name;
        }
        speak(msg) {
            console.log("the " + this.name + " says " + msg);
        }
    }

    let killerRabbit = new Rabbit("killer");
    killerRabbit.speak("go out");
    let blackRabbit = new Rabbit("black");
    blackRabbit.speak("go to work");

    //与function类似，class可以在语句和表达式中使用。
    //当用作表达式时，它不定义绑定，而只是将构造函数作为值生成。你可以在类表达式中省略类名
    let obj = new class { get() { return "go shopping"; } };
    console.log(obj.get());

    //向对象添加属性时，无论它是否存在于原型中，此属性都会被添加到对象本身
    //对象修改原型属性时,会覆盖原值,显示对象新值
    console.log("killerRabbit's teeth " + killerRabbit.teeth);
    Rabbit.prototype.teeth = "small";
    console.log("killerRabbit's teeth " + killerRabbit.teeth);
    killerRabbit.teeth = "sharp";
    console.log("killerRabbit's teeth " + killerRabbit.teeth);
    console.log("blackRabbit's teeth " + blackRabbit.teeth);
    console.log("Rabbit's teeth " + Rabbit.prototype.teeth);

    let arr = [1, 2, 3, 4];
    console.log(Object.getPrototypeOf(arr));
    console.log(Object.getPrototypeOf(arr) == Array.prototype);
    console.log(Object.getPrototypeOf(arr.toString));
    console.log(arr.toString());
    //直接使用数组调用Object.prototype.toString会产生不同的字符串
    console.log(Object.prototype.toString.call(arr));

    let ages = {
        Ama: 10,
        Beta: 12,
        Candy: 16
    };
    //Object. keys只返回一个对象自己的键，而不是原型中的那些属性
    console.log(Object.keys(ages));
    console.log("Ama's age is", ages.Ama);
    console.log(`Candy's age is ${ages["Candy"]}`);
    console.log("is Beta in ages ? ", "Beta" in ages);
    //toString来自Object.prototype,使用普通对象作为映射是危险的
    console.log("is toString in ages ? ", "toString" in ages);//true
    console.log("is Beta in ages ? ", ages.hasOwnProperty("Beta"));//true
    //hasOwnProperty只显示对象自己的属性
    console.log("is toString in ages ? ", ages.hasOwnProperty("toString"));//false

    //以创建没有原型的对象。如果将null传递给Object.create，则生成的对象将不会从Object. prototype派生，并且可以安全地用作映射。
    console.log("toString" in Object.create(null));

    //symbol
    //符号是使用Symbol函数创建的值
    let sym = Symbol("name");
    console.log(Rabbit.prototype);
    console.log(Rabbit.prototype.name);//Rabbit.prototype没有name属性
    console.log(Rabbit.name);//类名
    console.log(killerRabbit.name);
    console.log(blackRabbit.name);
    //虽然sym=="name",但是sym和name是不同的属性
    console.log("sym == \"name\"?", sym == "name");
    console.log(killerRabbit[sym]);//undefined
    console.log(blackRabbit[sym]);//undefined
    Rabbit.prototype[sym] = "a crazy rabbit";
    console.log(killerRabbit.name);
    console.log(blackRabbit.name);
    console.log(killerRabbit[sym]);
    console.log(blackRabbit[sym]);
    //字符串不同，新创建的符号是唯一的——你不能两次创建相同的符号。
    console.log("是否有相同的Symbol?", (sym == Symbol("name")));

    //getter,setter,static
    class Temperature {
        constructor(celsius) {
            this.celsius = celsius;
        }
        get fahrenheit() {
            return this.celsius * 1.8 + 32;
        }
        set fahrenheit(val) {
            this.celsius = (val - 32) / 1.8;
        }
        static fromFahrenheit(val) {
            return new Temperature((val - 32) / 1.8);
        }
    };
    let temp1 = new Temperature(20);
    console.log("celsius is", temp1.celsius);
    console.log("fahrenheit is", temp1.fahrenheit);
    temp1.fahrenheit = 100;
    console.log("celsius is", Math.ceil(temp1.celsius));
    console.log("fahrenheit is", temp1.fahrenheit);
    let temp2 = Temperature.fromFahrenheit(200);
    console.log("temp2's celsius is", Math.ceil(temp2.celsius));
    console.log("temp2's fahrenheit is", temp2.fahrenheit);

    //extends继承
    class RobotRabbit extends Rabbit {
        constructor(name) {
            super(name)
            {
                this.name = "robot" + name;
            }
        }
    }
    let rr = new RobotRabbit("killer");
    console.log(rr.name);
    console.log(rr.teeth);
    console.log(Object.getPrototypeOf(rr) == RobotRabbit.prototype);
    console.log("rr instanceof RobotRabbit?", rr instanceof RobotRabbit);
    console.log("rr instanceof Rabbit?", rr instanceof Rabbit);
    console.log("rr instanceof Object?", rr instanceof Object);
    console.log("rr instanceof Function?", rr instanceof Function);
}

function Catch() {
    //严格模式
    function strictTest() {
        "use strict"
        //通常，当你忘记将let放在绑定之前时，就像示例中的counter一样，JavaScript会静悄悄地创建一个全局绑定并使用它。
        //在严格模式下，JavaScript会报告错误
        msg = "what's this?";
        console.log(msg);
    }

    try {
        //ReferenceError: assignment to undeclared variable msg
        strictTest();
    }
    catch (e) {
        console.log("catch:", e.message);
    }

    class MyError extends Error { }

    try {
        throw new MyError("it's an error");
    }
    catch (e) {
        if (e instanceof MyError)
            console.log("catch my:", e.message);
    }
    finally {
        console.log("go to finally");
    }
}

function myMoudle() {
    //将字符串当做代码执行

    //特殊运算符eval会改变作用域
    const x = 1;
    function evalAndReturnX(code) {
        eval(code);
        return x;
    }
    console.log(evalAndReturnX("var x=2"));//2
    console.log(x);//1

    //使用Function,包含参数和函数体
    let plusOne = Function("n", "return n+1");
    console.log(plusOne(2));

    //const ordinal = require("ordinal");
}

function myAsync() {
    //异步,回调函数
    setTimeout(() =>console.log("job is done"), 2000);
    setTimeout((x) =>console.log(x, "job is done"), 3000, "Anna's");
    console.log("prepared");

    //promise
    //promise是一种异步行为，它可能在某个时刻完成并产生值。它能够在有值时通知任何感兴趣的人。
    //创建promise的最简单方法是调用Promise.resolve。此函数确保你提供的值包含在promise中。
    //Promise.resolve
    let fifteen = Promise.resolve(15);
    //要获得promise的结果，可以使用then方法。
    //then是一个回调函数,它返回另一个promise
    //可以为单个promise添加多个回调函数
    fifteen.then(val=>console.log(`receive vale ${val}`));

    //Promise构造函数
    //可传入2个参数,resolve和reject
    //resolve和reject,都会返回1个新的promise
    //resolve,用于解析promise,等同于Promise.resolve
    //reject拒绝,会被.catch捕获,并返回1个新的promise
    let p = new Promise(resovle => {
        console.log("execute");
        resovle(111);
    });
    p.then((val) =>console.log("receive", val));

    new Promise((_, reject) =>reject("fail"))
    .then(val=>console.log("handle 1"))
    .catch(reason=> {
        console.log(reason);
        return "nothing";
    })
    .then(val=>console.log("handle 2", val));
    console.log("promise prepared");
    console.log("code end ....");

    ////生成器 generator
    ////当你使用function * 定义一个函数时，它将成为一个生成器。
    ////当你调用一个生成器时，它会返回一个迭代器
    ////***编译器报错,运行正常***
    //function* power()
    //{
    //    for(let i=0;i<3;i++)
    //        yield i*10;
    //}

    //for(let ii of power())
    //{
    //    console.log(ii);
    //}
}

function myDOM() {
    //返回集合Elements
    let ts = document.body.getElementsByTagName("p");
    let cs = document.body.getElementsByClassName("A");
    let ns = document.getElementsByName("CC");
    let sas = document.querySelectorAll(".A");
    //返回单数Element
    let el = document.getElementById("B1");
    let sa = document.querySelector(".A");

    console.log(ts);
    for(let p of ts)
    {
        console.log(p.innerText);
    }
    //getAttribute获取属性
    console.log(cs[0].innerText, "A");
    console.log(el.innerText, el.getAttribute("id"));
    console.log(ns[0].innerText, ns[0].getAttribute("name"));
    console.log(sas);
    console.log(sa);

    //创建文本节点,并附加到元素
    let tn = document.createTextNode("bbbb");
    el.appendChild(tn);

    //往前插入[同级]节点
    let new1 = document.createElement("p");
    new1.innerText = "Arsas";
    document.body.insertBefore(new1, ts[1]);

    //末尾附加[子]节点
    let new2 = document.createElement("p");
    new2.innerText = "Dail";
    ns[0].appendChild(new2);

    //from() 方法从具有 length 属性或可迭代对象的任何对象返回 Array 对象。
    let arrayish = { 0: "one", 1: "two", length: 2 };
    console.log(arrayish);
    let array = Array.from(arrayish);
    console.log(array);
    console.log(array.map(x=>x.toUpperCase()));

    //元素占用空间
    console.log("el.offsetWidth", el.offsetWidth, "el.offsetHeight", el.offsetHeight);
    //元素内部空间
    console.log("el.clientWidth", el.clientWidth, "el.clientHeight", el.clientHeight);
    //元素在屏幕上精确位置
    console.log(el.getBoundingClientRect());
}

function myEvent() {
    //window绑定指向浏览器提供的一个内置对象。它表示包含文档的浏览器窗口。
    //调用其addEventListener方法会注册在第一个参数描述的事件发生时要调用的第二个参数。
    window.addEventListener("click", event => {
        console.log("window: you click", event.target.nodeName, "at", (new Date()).toLocaleTimeString());
    });
    //在事件对象上调用preventDefault方法，这通常是因为处理程序已经处理了事件。
    //屏蔽默认处理,这里禁用了右键
    window.addEventListener("mousedown", event => {
        if (event.button == 2) {
            console.log("window: prevent default");
            event.preventDefault();
        }
    });
    window.onkeydown = event=> {
        //组合键
        if (event.key == " " && event.ctrlKey) {
            console.log("window combos");
        }
    };
    window.onload = () => {
        console.log("window load");
    }
    window.onbeforeunload = event=> {
        event.returnValue = ("close the window ?");
        console.log("window before unload");
    }

    //type属性始终包含标识事件的字符串（例如"click"或"mousedown"）。
    let btn = document.getElementById("btn");
    btn.addEventListener("mousedown",
        event=> {
            if (event.button == 0)
                console.log("left button", event.type);
            else if (event.button == 1)
                console.log("middle button", event.type);
            else if (event.button = 2)
                console.log("right button", event.type)
        });
    //先执行当前节点事件,然后事件向外传播,至父节点,跟节点,最后到窗体注册时间响应
    btn.addEventListener("click", () => console.log("click button"));

    //阻止事件向外传播 stopPropagation
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", event => {
        console.log("click button and stop propagation");
        event.stopPropagation();
    });

    //keydown 按住会持续触发
    let input = document.querySelector(".msg");
    input.addEventListener("keydown", event=> {
        //组合键
        if (event.key == "a" && event.ctrlKey) {
            console.log("input combos");
        }
    });
    //可以键入的元素（例如＜input＞和＜textarea＞标签）会在用户更改其内容时触发"input"事件。
    input.addEventListener("input", e=> {
        console.log("you input", input.value);
    });

    //Web worker
    //worker是一个JavaScript进程，它在自己的时间轴上与主脚本一起运行。
    //为了避免有多个线程接触相同数据的问题，worker不会与主脚本的环境共享其全局范围或任何其他数据。
    //相反，必须通过来回发送消息与它们进行通信。
    let myworker = new Worker("js/worker.js");
    myworker.addEventListener("message", e=> {
        console.log("the worker responded:", e.data);
    });
    //调用worker.js,传入data,触发worker.js的message事件
    //worker.js处理完成,调用postMessage,触发my.js的message事件
    myworker.postMessage(10);
    myworker.postMessage(20);

    //计时器
    let bombtimer = setTimeout((x) =>console.log("BOOM after", x, "seconds"), 3000, 3);
    //取消计时器
    if (Math.random() < 0.5) {
        clearTimeout(bombtimer);
        console.log("the bomb is cleared");
    }

    //定时器
    let ticks = 0;
    let clock = setInterval(() => {
        ticks++;
        if (ticks > 3) {
            //取消定时器
            clearInterval(clock);
            console.log("clock stoped !");
        }
        else
            console.log("i'm ready !");
    }, 1000);

    //限频
    //某些类型的事件有可能连续多次快速触发（例如"mousemove"和"scroll"事件）。
    //在处理此类事件时，你必须小心不要做太费时间的事情，否则你的处理程序会占用很多时间，以至于与文档的交互开始变得缓慢。
    //你可以使用setTimeout来确保它不会太过频繁地触发。这通常被称为对此事件限频（debouncing）
    let inputTimeout;
    let multi = document.querySelector(".multi");
    multi.addEventListener("input", event=> {
        //再次触发时,取消上一轮的等待(已发生/未发生),重新开始计时等待
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
            console.log("debounce:", multi.value);
        }, 1000);
    });


    console.log("end ...");
}

function myCanvas() {
    let circle = document.querySelector("circle");
    circle.setAttribute("fill", "cyan");

    //使用＜canvas＞ DOM元素上的getContext方法创建上下文。
    let canvas = document.querySelector("canvas");
    console.log(canvas);
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";//填充属性,所有填充方法共用
    ctx.fillRect(0, 0, 80, 50);//填充矩形,x,y,长,宽

    ctx.strokeStyle = "green";//绘制属性,所有绘制方法共用
    ctx.lineWidth = 5;//线的宽度
    ctx.strokeRect(100, 0, 50, 50);//绘制轮廓
    ctx.lineWidth = 1;
    ctx.strokeRect(170, 0, 50, 50);

    //画线
    ctx.beginPath();
    ctx.moveTo(250, 0);//移动
    ctx.lineTo(300, 0);//连线
    ctx.moveTo(250, 25);
    ctx.lineTo(300, 25);
    ctx.moveTo(250, 50);
    ctx.lineTo(300, 50);
    ctx.lineTo(300, 0);
    ctx.stroke();//绘制
    ctx.fill();//填充,如果线段未封闭,则从终点到起点添加一条隐含的线段,实际不存在

    //曲线
    ctx.beginPath();
    ctx.moveTo(320, 50);
    //拐点(350,0),终点(380,50)
    ctx.quadraticCurveTo(350, 0, 380, 50);
    ctx.lineTo(350, 0);
    ctx.closePath();
    ctx.stroke();

    //弧线
    ctx.beginPath();
    //圆心(400,20),半径(20),起点(0),终点(7)
    //角度从位于圆中心点右侧的点开始计算，然后从那里顺时针旋转。你可以以0为起点，以大于2π（例如7）的数为终点，画一个完整的圆。
    ctx.arc(400, 20, 20, 0, 7);
    //弧线的起点会连接起来
    ctx.arc(480, 20, 20, 0, 0.5 * Math.PI);
    ctx.stroke();

    //文本
    ctx.font = "28px Georgia";
    ctx.fillStyle = "fuchsia";
    //y是文本底线的位置
    ctx.fillText("draw a text", 500, 50);
}

function myHttp() {
    //URL编码
    console.log(encodeURIComponent("yes?"));
    console.log(decodeURIComponent("yes%3F"));

    //fetch
    //浏览器JavaScript可以通过接口发出HTTP请求，该接口称为fetch。
    //调用fetch将返回一个promise，该promise将被解析为一个Response对象，其中包含有关服务器响应的信息，例如其状态代码和它的标头。
    fetch("js/worker.js").then(response=> {
        console.log("status:", response.status);
        console.log("Content-Type:", response.headers.get("Content-Type"));
        //要获取响应的实际内容，可以使用text方法
        //因为一旦收到响应的标头，就会解决初始promise，并且因为读取响应正文可能需要一段时间，这将再次返回一个
        return response.text();
    }).then(console.log);

    let form = document.querySelector("form");
    //for(let e of form.elements)
    //{
    //    console.log("for:", e.type.toString(), e.name, e.value);
    //}

    //＜form＞元素有一个名为elements的属性，它包含一个类似于数组的域集合。
    for (let i = 0; i < form.elements.length; i++) {
        let e = form.elements[i];
        console.log("form.elements ", i, ":", e.type.toString(), e.name, e.value);
    }
    //表单域的name属性确定在提交表单时标识其值的办法。
    //它也可以用作访问表单的elements属性时的属性名
    console.log("form elements property:", form.elements.mytext);

    //当一个域包含在＜form＞元素中时，其DOM元素将具有一个form属性，此属性链接回表单的DOM元素
    let f = form.elements[0].form;
    console.log("get form name form it's element:", f.name);

    //file
    let fileinput = document.querySelector("input[type=\"file\"]");
    document.addEventListener("change", (sender, e) => {
        if (fileinput.files.length > 0) {
            console.log("you selected", fileinput.files.length, "files");

            for(let f of fileinput.files)
            {
                console.log("file name:", f.name, "size:", f.size, "byte");
                if (f.type) console.log("first file type:", f.type);

            //读取文件是通过创建FileReader对象，为其注册"load"事件处理程序，并调用其readAsText方法，再为其提供我们想要读取的文件来完成的。
            //加载完成后，阅读器的result属性包含文件的内容
                let reader = new FileReader();
                reader.addEventListener("load", () => {
                    console.log("file:", f.name, "start with:");
                    console.log(reader.result.slice(0, 200));
                });
                reader.readAsText(f);
            }

            readfile(fileinput.files[0]);
        }
        else {
            console.log("no file");
        }
    });

    //当读取文件因任何原因失败时，FileReaders也会触发"error"事件。
    //错误对象本身将最终出现在读取者的error属性中。
    function readfile(file) {
        return new Promise((resolve, reject) => {
            console.log("read by promise");
            let reader = new FileReader();
            reader.addEventListener("load", () => {
                resolve(reader.result);
            });
            reader.addEventListener("error", () => {
                reject(reader.error);
            });
            reader.readAsText(file);
        });
    }

    //localStorage对象可用于以页面重新加载的方式存储数据。此对象允许你在某名称下归档字符串值。
    //localStorage中的值会一直存在，直到它被覆盖、用removeItem删除，或者用户清除其本地数据为止。
    console.log("localStorage.length:", localStorage.length);
    localStorage.setItem("myname", "ky");

    for (let i = 0; i < localStorage.length; i++) {
        console.log("localStorage", i, "*key:", localStorage.key(i), "*value:", localStorage.getItem(localStorage.key(i)));
    }
}