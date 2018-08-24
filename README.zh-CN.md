简体中文 | [English](https://github.com/sosout/mnte)

# mnte ![download](https://img.shields.io/npm/dt/mnte.svg) ![npm-version](https://img.shields.io/npm/v/mnte.svg) ![license](https://img.shields.io/npm/l/mnte.svg)

> 一个简单的模板引擎。

## 安装

### npm

``` shell
npm i mnte
```

### CDN

``` html
<script src="https://unpkg.com/mnte@0.1.1/dist/mnte.js"></script>
```

### jsdelivr

``` html
<script src="https://cdn.jsdelivr.net/npm/mnte@0.1.1/dist/mnte.js"></script>
```

## 用法

### 示例一

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Demo of mnte</title>
</head>
<body>
  <h2>Demo1</h2>
  <div id="demo1"></div>
  <script>
    import mnte from 'mnte';

    const demo1 = '<a class="mnte-tab" data-tab="{{id}}" id="__mnte_tab_{{id}}">{{name}}</a>';
    document.getElementById('demo1').innerHTML = mnte(demo1, {id: 'demo1', name: 'This is Demo1!'});
  </script>
</body>
</html>
```

当然，您也可以先下载然后直接使用它。它在`mnte/dist`目录下，生产环境用`mnte.min.js`，开发环境用`mnte.min.js`。

## License
MIT