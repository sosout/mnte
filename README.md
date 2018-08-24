English | [简体中文](./README.zh-CN.md)

# mnte ![download](https://img.shields.io/npm/dt/mnte.svg) ![npm-version](https://img.shields.io/npm/v/mnte.svg) ![license](https://img.shields.io/npm/l/mnte.svg)

> A simple template engine.

## Installation

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

## Usage

### Demo1

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

Of course, you can also download first and then use it. It's at `mnte/dist`. `mnte.min.js` for production and `mnte.js` for development.

## License
MIT