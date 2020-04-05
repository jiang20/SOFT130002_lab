# Lab4设计文档

17307130291 姜尔玲

## 一、布局

#### 轮播bootstrap

1、最外层使用class=“carousel slide”来表示div。

2、用class为carousel-indicators的ol标签来创建轮播指标。

3、用class为carousel-inner的div创建轮播项目，内嵌式class为item的div，并内嵌图片，第一个图片class增加active来表示初始启用该图片。

4、通过设置class为carousel-control left和carousel-control right两个a标签设置导航左右滑动。

#### 展示bootstrap

1、list-group的class形成一个展示区列表。

2、每一个列表项为list-group-item picture从而依次展示图片形成分块。

3、对每块内部的按钮和图片也按照上述逻辑设计。

#### 足部bootstrap

1、container的class为外层为容器。

2、内部通过row和col来控制比例进行布局

#### 整体结构

整体上采用第一部分轮播+导航栏，第二部分展示其他照片的形式，第三部分足部，形成垂直的对称结构。

本设计的独特之处在于展示区六个小块形成两行，两行之间的分割线大致形成整个界面的黄金分割比，为您带来极致美感！

## 二、主页截图

![image-20200405225604761](C:\Users\L2595\Desktop\lab4\lab4\lab4-jel.assets\image-20200405225604761.png)

![image-20200405225624107](C:\Users\L2595\Desktop\lab4\lab4\lab4-jel.assets\image-20200405225624107.png)

![image-20200405225637566](C:\Users\L2595\Desktop\lab4\lab4\lab4-jel.assets\image-20200405225637566.png)