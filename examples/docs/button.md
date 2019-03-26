# Button 按钮
----
### 基础用法
<style>
  .demo-block .m-row {
    margin-bottom:20px;
  }
</style>
 <div class="demo-block">
  <m-row :gutter="20">
    <m-button>默认按钮</m-button>
    <m-button type="primary"> 主要按钮</m-button>
    <m-button type="success"> 成功按钮</m-button>
    <m-button type="warn"> 警告按钮</m-button>
    <m-button type="info"> 信息按钮</m-button>
    <m-button type="danger"> 危险按钮</m-button>
  </m-row>
  <m-row :gutter="20">
    <m-button plain>默认按钮</m-button>
    <m-button type="primary" plain> 主要按钮</m-button>
    <m-button type="success" plain> 成功按钮</m-button>
    <m-button type="warn" plain> 警告按钮</m-button>
    <m-button type="info" plain> 信息按钮</m-button>
    <m-button type="danger" plain> 危险按钮</m-button>
  </m-row>
  <m-row :gutter="20">
    <m-button round>默认按钮</m-button>
    <m-button type="primary" round> 主要按钮</m-button>
    <m-button type="success" round> 成功按钮</m-button>
    <m-button type="warn" round> 警告按钮</m-button>
    <m-button type="info" round> 信息按钮</m-button>
    <m-button type="danger" round> 危险按钮</m-button>
  </m-row>
  <m-row :gutter="20">
    <m-button circle plain primary>
      <m-icon icon="search" color="#999"></m-icon>
    </m-button>
    <m-button type="primary" circle icon='edit'></m-button>
    <m-button type="success" circle icon="enter"></m-button>
    <m-button type="warn" circle icon="notice"></m-button>
    <m-button type="info" circle icon="info"></m-button>
    <m-button type="danger" circle>
      <m-icon icon="flag"></m-icon>
    </m-button>
  </m-row>
</div>

  

::: demo
```html
<m-row :gutter="20">
    <m-button>默认按钮</m-button>
    <m-button type="primary"> 主要按钮</m-button>
    <m-button type="success"> 成功按钮</m-button>
    <m-button type="warn"> 警告按钮</m-button>
    <m-button type="info"> 信息按钮</m-button>
    <m-button type="danger"> 危险按钮</m-button>
  </m-row>

  <m-row :gutter="20">
    <m-button plain>默认按钮</m-button>
    <m-button type="primary" plain> 主要按钮</m-button>
    <m-button type="success" plain> 成功按钮</m-button>
    <m-button type="warn" plain> 警告按钮</m-button>
    <m-button type="info" plain> 信息按钮</m-button>
    <m-button type="danger" plain> 危险按钮</m-button>
  </m-row>

  <m-row :gutter="20">
    <m-button round>默认按钮</m-button>
    <m-button type="primary" round> 主要按钮</m-button>
    <m-button type="success" round> 成功按钮</m-button>
    <m-button type="warn" round> 警告按钮</m-button>
    <m-button type="info" round> 信息按钮</m-button>
    <m-button type="danger" round> 危险按钮</m-button>
  </m-row>

  <m-row :gutter="20">
    <m-button circle type="primary">
      <m-icon icon="search" color="#999"></m-icon>
    </m-button>
    <m-button type="primary" circle icon='edit'></m-button>
    <m-button type="success" circle icon="enter"></m-button>
    <m-button type="warn" circle icon="notice"></m-button>
    <m-button type="info" circle icon="info"></m-button>
    <m-button type="danger" circle>
      <m-icon icon="flag"></m-icon>
    </m-button>
  </m-row>
```
:::

### 禁用状态
按钮不可用状态 disabled

<div class="demo-block">
<m-row>
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled> 主要按钮</m-button>
  <m-button type="success" disabled> 成功按钮</m-button>
  <m-button type="warn" disabled> 警告按钮</m-button>
  <m-button type="info" disabled> 信息按钮</m-button>
  <m-button type="danger" disabled> 危险按钮</m-button>
</m-row>
<m-row>
  <m-button palin disabled>默认按钮</m-button>
  <m-button type="primary" plain disabled> 主要按钮</m-button>
  <m-button type="success" plain disabled> 成功按钮</m-button>
  <m-button type="warn" plain disabled> 警告按钮</m-button>
  <m-button type="info" plain disabled> 信息按钮</m-button>
  <m-button type="danger" plain disabled> 危险按钮</m-button>
</m-row>
</div>

::: demo
``` html
<m-row>
  <m-button disabled>默认按钮</m-button>
  <m-button type="primary" disabled> 主要按钮</m-button>
  <m-button type="success" disabled> 成功按钮</m-button>
  <m-button type="warn" disabled> 警告按钮</m-button>
  <m-button type="info" disabled> 信息按钮</m-button>
  <m-button type="danger" disabled> 危险按钮</m-button>
</m-row>
<m-row>
  <m-button palin disabled>默认按钮</m-button>
  <m-button type="primary" plain disabled> 主要按钮</m-button>
  <m-button type="success" plain disabled> 成功按钮</m-button>
  <m-button type="warn" plain disabled> 警告按钮</m-button>
  <m-button type="info" plain disabled> 信息按钮</m-button>
  <m-button type="danger" plain disabled> 危险按钮</m-button>
</m-row>
```
:::

### 带图标或图标加文字的按钮

<div class="demo-block">
  <m-row class="clearfix">
    <m-button type="primary" icon="search"></m-button>
    <m-button type="success" icon="share"></m-button>
    <m-button type="info" disabled icon="edit"></m-button>
    <m-button type="primary" circle icon="search"></m-button>
    <m-button type="primary" icon="search">搜索</m-button>
    <m-button type="primary" icon="edit">编辑</m-button>
  </m-row>
</div>

::: demo
``` html
<m-row class="clearfix">
  <m-button type="primary" icon="search"></m-button>
  <m-button type="success" icon="share"></m-button>
  <m-button type="info" disabled icon="edit"></m-button>
  <m-button type="primary" circle icon="search"></m-button>
  <m-button type="primary" icon="search">搜索</m-button>
  <m-button type="primary" icon="edit">编辑</m-button>
</m-row>
```
:::

### 不同尺寸

button组件的默认宽度都是auto,有子内容撑开，这里的不同尺寸主要是font-size 和 padding 大小的不同。</br>
尺寸从大到小依次是 lg > md > 默认 > sm > xs

<div class="demo-block">
  
  <m-row>
    <m-button size="lg">超大按钮超大按钮</m-button>
    <m-button size="md">中等按钮</m-button>
    <m-button>默认按钮</m-button>
    <m-button size="sm">小型按钮</m-button>
    <m-button size="xs">超小按钮</m-button>
  </m-row>
  <m-row>
    <m-button size="lg" round>超大按钮</m-button>
    <m-button size="md" round>中等按钮</m-button>
    <m-button round>默认按钮</m-button>
    <m-button size="sm" round>小型按钮</m-button>
    <m-button size="xs" round>超小按钮</m-button>
  </m-row>
</div>

::: demo
``` html
  <m-row>
    <m-button size="lg">超大按钮超大按钮</m-button>
    <m-button size="md">中等按钮</m-button>
    <m-button size="xs">默认按钮</m-button>
    <m-button size="sm">小型按钮</m-button>
    <m-button size="xs">超小按钮</m-button>
  </m-row>
  <m-row>
    <m-button size="lg" round>超大按钮</m-button>
    <m-button size="md" round>中等按钮</m-button>
    <m-button size="xs" round>默认按钮</m-button>
    <m-button size="sm" round>小型按钮</m-button>
    <m-button size="xs" round>超小按钮</m-button>
  </m-row>
```
:::