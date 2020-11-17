title: 教程：基于Butterfly主题的轮播手动置顶文章
author: Zhu Fue
tags:
  - 教程
  - Butterfly主题
  - DIY
categories: 
  - 教程
date: 2020-11-17 18:42:00
top: 122
cover:  /images/letter/t.png
top_img: /images/letter/t.png
---

## 序言：效果展示 ##

![example](https://zfe.space/images/top.png)
<p>感谢xwcker提供的魔改思路。</p>
<p>因为置顶文章过多太占位置，所以写了这个手动置顶的部件。</p>
<p>项目用到了swiper</p>
<p>资源包地址：https://github.com/Zfour/Butterfly-swiper</p>
<a  class="btn-beautify button--animated outline black" style="cursor:pointer"  href="https://github.com/Zfour/Butterfly-swiper">资源包下载</a>
<p>废话不多说了，开始教学。</p>
<hr></hr>

## 步骤1：修改pug代码 ##

 {% blockquote %}
这次由于vue没有配置成功，因此打算2.0版本再进行vue适配。
 {% endblockquote %}

### 下载资源包 ###

<a  class="btn-beautify button--animated outline black" style="cursor:pointer"  href="https://github.com/Zfour/Butterfly-swiper">资源包下载</a>

### 增加、替换代码 ###

<p>前往"根目录\themes\butterfly\layout"文件夹</p>
<p>将资源包中的"sliderbar.pug"复制到文件夹中。</p>
<p>将"index.pug"复制并重命名为"index-re.pug"作为备份。</p>
<p>将资源包pug文件夹的Original中的"index.pug"覆盖进行替换。</p>
<p>或者打开"index.pug"按照以下代码进行修改。修改的起始点为"#recent-posts.recent-posts"。</p>

```PUG
extends includes/layout.pug

block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
    .recent-post-item(style='height:auto;width:100%')
        include sliderbar.pug
    .recent-post-item(style='height:0px;clear:both;margin-top: 0px;')
    +postUI
    include includes/pagination.pug
```

<hr></hr>

## 步骤2：添加引入js、css代码 ##

### 放置资源包 ###

<p>将下载包中的swiper文件夹放入根目录的"source"文件夹下。</p>
<p>ps.如果无法正常加载就放入主题目录的"source"文件夹下。</p>

### 引入js和css ###

<p>打开"\themes\butterfly\"路径下的"_config.yml"</p>
<p>搜索到"inject:"设置处</p>
<p>添加以下代码：</p>

```yml
inject:
  head:
    - <link rel="stylesheet" href="/swiper/swiper.min.css">
    - <link rel="stylesheet" href="/swiper/swiperstyle.css">
  bottom:
    - <script src="/swiper/swiper.min.js"></script>
    - <script src="/swiper/swiperindex.js"></script>
  
```

<hr></hr>

## 步骤3：填写自定义属性的js配置 ##

<p>本置顶配色完全适配黑暗模式，为主题适配配色。</p>

### 配置置顶 ###

<p>首先这次需要对pug进行修改，打开"sliderbar.pug"。</p>
<p>其中以下代码部分为主要修改项。默认展示五个，你可以通过复制这段代码增加展示的个数。</p>

```PUG
.blog-slider__item.swiper-slide(style='width: 750px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;')
      .blog-slider__img
        img(src='https://zfe.space/images/letter/m.png(这里配置展示的图片)', alt='https://zfe.space/images/letter/m.png(这里配置展示的图片)')
      .blog-slider__content
        span.blog-slider__code 2020-11-05(这里配置文章时间)
        a.blog-slider__title(href='https://zfe.space/2020/11/05/2020-11-05/') 教程：基于Butterfly主题的新闻资讯侧边栏(这里配置文章标题和文章链接)
        .blog-slider__text 这个插件基于RollToolsApi,在使用前请先在微信搜索小程序“Roll地盘”获取api.id和api.key。(这里配置文章简介)
        a.blog-slider__button(href='https://zfe.space/2020/11/05/2020-11-05/') 详情(这里配置文章链接)
```

<hr></hr>

## 总结 ##

<p>此时，"hexo g && hexo s"可发现已加载。</p>
<p>若有问题请与我邮件联系499984532@qq.com。</p>
