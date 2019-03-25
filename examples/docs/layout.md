# 栅格布局


----

### 基础布局
使用单一分栏创建基础的栅格布局，基数为24栏
<style>
    .demo-block .m-row {
        margin-bottom:20px;
    }
    
    .demo-block .grid-con {
        width:100%;
        height:36px;
        border-radius:4px;
        color:#fff;
        line-height:38px;
        text-align:center;
    }
    .demo-block .m-bg-deepgray {
       background-color:#99a9bf
    }
    .demo-block .m-bg-gray {
        background-color:#999;
    }
    .demo-block .m-bg-lightgray {
        background-color:#e5e5e5;
    }
</style>
<div class="demo-block">
    <m-row class="clearfix">
        <m-col :span="24"><div class="grid-con m-bg-gray">24</div></m-col>
    </m-row>
    <m-row class="clearfix">
        <m-col :span="12"><div class="grid-con m-bg-gray">12</div></m-col>
        <m-col :span="12"><div class="grid-con m-bg-deepgray">12</div></m-col>
    </m-row>
    <m-row class="clearfix">
        <m-col :span="8"><div class="grid-con m-bg-gray">8</div></m-col>
        <m-col :span="8"><div class="grid-con m-bg-deepgray">8</div></m-col>
        <m-col :span="8"><div class="grid-con m-bg-lightgray">8</div></m-col>
    </m-row>
    <m-row class="clearfix">
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
    </m-row>
    ...
</div>

::: demo
``` html
<m-row class="clearfix">
    <m-col :span="24"><div class="grid-con m-bg-gray">24</div></m-col>
</m-row>

<m-row class="clearfix">
    <m-col :span="12"><div class="grid-con m-bg-gray">12</div></m-col>
    <m-col :span="12"><div class="grid-con m-bg-deepgray">12</div></m-col>
</m-row>

<m-row class="clearfix">
    <m-col :span="8"><div class="grid-con m-bg-gray">8</div></m-col>
    <m-col :span="8"><div class="grid-con m-bg-deepgray">8</div></m-col>
    <m-col :span="8"><div class="grid-con m-bg-lightgray">8</div></m-col>
</m-row>

<m-row class="clearfix">
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
</m-row>

<style>
.demo-block .m-row {
    margin-bottom:20px;
}
.demo-block .grid-con {
    width:100%;
    height:36px;
    border-radius:4px;
    color:#fff;
    line-height:38px;
    text-align:center;
}
.demo-block .m-bg-deepgray {
    background-color:#99a9bf
}
.demo-block .m-bg-gray {
    background-color:#999;
}
.demo-block .m-bg-lightgray {
    background-color:#e5e5e5;
}
</style>
```
:::




### 分栏间隔
每栏之间有一定的间隔, Row组件提供gutter属性来指定间隔大小，默认为0

<div class="demo-block">
    <m-row class="clearfix" gutter="20">
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
    </m-row>
    <m-row class="clearfix" gutter="100">
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
        <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
    </m-row>
...
</div>


::: demo
```html
<m-row class="clearfix" gutter="20">
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
</m-row>
<m-row class="clearfix" gutter="100">
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-gray">6</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-lightgray">6</div></m-col>
</m-row>

```
:::

### 混合布局
根据1/24栏的规则，任意布局

<div class="demo-block">
<m-row class="clearfix" gutter="20">
    <m-col :span="18"><div class="grid-con m-bg-gray">18</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
</m-row>
<m-row class="clearfix" gutter="20">
    <m-col :span="5"><div class="grid-con m-bg-gray">5</div></m-col>
    <m-col :span="14"><div class="grid-con m-bg-deepgray">14</div></m-col>
    <m-col :span="5"><div class="grid-con m-bg-deepgray">5</div></m-col>
</m-row>
<m-row class="clearfix" gutter="20">
    <m-col :span="3"><div class="grid-con m-bg-gray">3</div></m-col>
    <m-col :span="8"><div class="grid-con m-bg-deepgray">8</div></m-col>
    <m-col :span="3"><div class="grid-con m-bg-deepgray">3</div></m-col>
    <m-col :span="10"><div class="grid-con m-bg-deepgray">8</div></m-col>
</m-row>
...
</div>

::: demo
```html
<m-row class="clearfix" gutter="20">
    <m-col :span="18"><div class="grid-con m-bg-gray">18</div></m-col>
    <m-col :span="6"><div class="grid-con m-bg-deepgray">6</div></m-col>
</m-row>
<m-row class="clearfix" gutter="20">
    <m-col :span="5"><div class="grid-con m-bg-gray">5</div></m-col>
    <m-col :span="14"><div class="grid-con m-bg-deepgray">14</div></m-col>
    <m-col :span="5"><div class="grid-con m-bg-deepgray">5</div></m-col>
</m-row>
<m-row class="clearfix" gutter="20">
    <m-col :span="3"><div class="grid-con m-bg-gray">3</div></m-col>
    <m-col :span="8"><div class="grid-con m-bg-deepgray">8</div></m-col>
    <m-col :span="3"><div class="grid-con m-bg-deepgray">3</div></m-col>
    <m-col :span="10"><div class="grid-con m-bg-deepgray">8</div></m-col>
</m-row>

```