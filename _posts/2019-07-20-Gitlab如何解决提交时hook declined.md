---
title: Gitlab如何解决提交时hook declined
layout: post
tags: git
---
## 配置git config
找到Gitlab的个人信息设置页面，找到自己的name和email

## 全局配置
    git config --global user.name "邮箱前戳"
    git config --global user.email "邮箱"
    
## 只修改项目配置文件
修改当前仓库.git/config
    [user]
    name = lisi4
    email = lisi4@vipkid.com.cn

## 修改完成后，一定要再做一次“非空commit”，然后再push!!!