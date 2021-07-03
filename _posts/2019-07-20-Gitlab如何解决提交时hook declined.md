---
title: Gitlab如何解决提交时hook declined
layout: post
tags: [git]
---
## 1、配置git config
找到Gitlab的个人信息设置页面，找到自己的name和email

## 2、全局配置
    git config --global user.name "邮箱前戳"
    git config --global user.email "邮箱"
    
## 3、只修改项目配置文件
修改当前仓库.git/config
````
    [user]
    name = lisi4
    email = lisi4@vipkid.com.cn
````
## <span style="color: rgb(255,0,0);">4、修改完成后，一定要再做一次“<span style="background-color: rgba(246,195,66,0.3);">非空commit</span>”，然后再push!!!</span>
原因：我们刚才改的只是配置，但对于以前的commit信息我们是没有做任何修改的，所以我们要再做一次commit，即保证最后一次commit信息是正确的即可。