# como-logic

使用typescript编写的纯逻辑方法，大多数方法积累于工作中常用的业务场景，属于比较偏却经常耗费时间精力的地方。testfdsafdsaf

### 本地调试

```shell
yarn serve or npm run serve
```

### 他们怎么来的

- **findTreeIds**

  在使用ElementPlus的级联组件时，设置为单选项时，得到数据是单个id，但是和后端交互往往需要将它的父级id一起传递给后端，这就需要树查找了。

