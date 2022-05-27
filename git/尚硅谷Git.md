# Git学习之旅

#### 查看子孙文件

--find  （路径）【查看所有文件和目录】

--find  （路径） -type f  【只查看文件】

#### 配置全局的name和email

###### 配置

--git config --global user.name  "xxx"

--git config --global user.email   "xxx"

###### 取消配置

--git config --global  --unset user.name

--git config --global  --unset user.email



#### 添加文件进git对象

--git hash-object -w 文件名



#### 查看git对象

--git cat-file -p （文件的hash值）【查看原文件内容】

--git cat-file -t  （文件的hash值） 【查看文件存储的数据类型】



#### 添加git对象成树对象到暂存区

--git update-index （--add）--cacheinfo  10644【linux文件类型】（git对象hash值） （文件名）【首次添加需要写--add】

--git write-tree  【将暂存区树对象写入工作区】



#### 查看暂存区树对象

--git ls-files  -s



#### 提交对象

--echo “ msg” | git commit-tree [要提交树对象的hash值]   -p [前一个提交对象的hash值，第一次提交不用指定]

###### 提交对象是链式的





### 高级Git指令

--git init 【初始化一个仓库】

--git add  【生成一个git对象并保存到暂存区】

​		相当于：--git hash-object -w [文件名]   

​                       --git update-index --add --cacheinfo 100664 [git对象的hash码] [文件名]

--git commit -m ‘ ’【生成一个树对象和提交对象】

​		相当于：--git write-tree

​						--echo “消息” | git commit-tree     消息相当于-m之后的内容



###### 完整的git操作，起码要有三个对象：git对象，树对象，提交对象 



--git status 【查看文件状态：暂存，已提交，已修改】



--git diff  【不加参数的：查看哪些文件已修改未暂存】



--git diff --staged 【查看哪些内容已经暂存了，但未提交】



--git commit -a 【跳过暂存区】



--git log （--oneline）  【查看提交日志】



--git rm . 【删除文件并添加到暂存区】



--git mv   【修改文件名并添加到暂存区】



 --git config --global alias.[别名]    [命令]           【配别名】



--git log --oneline --decorate --graph --all     【查看所有分支提交日志】

## Git 杀手锏分支功能

--git branch                             【显示分支】



--git branch [分支名]              【创建新分支】



--git checkout(switch)    [分支名]          【切换分支】



--git branch -D [分支名]    【删除分支】



--git branch -v          【查看当前分支的最后一次提交】





--git branch [分支名]  [提交对象hash]          【创建一个指向指定提交对象的分支】



--git checkout -b [分支名]                             【创建一个新分支并切换过去，切换回来仍需要这个命令，有很大问题不建议使用。git新版本推荐switch来切换、创建分支】



--git switch -c [分支名]     【切换并创建新分支】



#### 切换分支注意点：

###### 切换分支会改变三个地方：1.HEAD指针指向 2.暂存区 3.工作目录。所以切换分支是有风险的，(当有未暂存的提交和未提交的暂存，会污染其他分支)应该在每次切换前，检查当前分支内容是否提交。



--git merge [要合并的分支名]      【当前分支合并其他分支】



##### Git的存储功能：（应用场景：当我们dev分支修改了很多内容，此时需要切换到其他分支工作，但是又不想提交，就可以使用存储功能来将当前的状态压入一个栈中）

--git stash    【生成存储状态】



--git stash apply    【应用栈顶的快照，不删除】



--git stash drop  【删除栈顶的快照】



--git stash pop     【弹出栈顶的快照并应用】





##### Git后悔药

--git restore  filename                【撤销工作区对文件的修改】

--git checkout  文件名 【命令可以撤销文件在工作区的修改。】
--git reset  文件名 【命令可以撤销指定文件的 git add 操作，即这个文件在暂存区的修改。】
--git reset 【命令可以撤销之前的所有 git add 操作，即在暂存区的修改。】

--git reflog                         【查看所有操作日志（提交和撤销）】



--git commit --amend     【修改最后一次提交对象的提交信息】



#### Git回退

--git reset --soft HEAD~   【HEAD节点带着分支节点一起向前回退一个版本与--git commit --amend类似】 



--git reset --soft [指定提交对象的hash]           【HEAD节点带着分支节点一起到指定提交对象】

###### 上述两个指令不改变暂存区



--git reset --mixed HEAD~      【HEAD节点带着分支节点一起回退一个提交对象版本，同时更改暂存区】



--git reset --hard HEAD~        【HEAD节点带着分支节点一起回退一个提交对象版本，同时更改暂存区,工作区】







## --团队协作与远程仓库

--git remote -v        【查看远程仓库】



--git remote add [别名]  [远程仓库地址链接]



--git config user.name = “xxx”

--git config user.email ="xxxx@xxx"

--git remote rm [远程仓库别名]     【移除远程仓库】

--git clone "远程仓库连接"



###### 在对应的分支操作

--git branch -u  [远程分支]           【让本地分支跟踪远程分支：能够直接pull拉，push推】



--git push [远程仓库]   本地分支      【将本地分支推送至远程仓库】



--git push  【必须让本地分支跟踪远程分支】



--git fetch  [远程仓库]           【拉取远程分支到远程跟踪分支，并不会影响本地分支，还需要创建新分支来合并这个远程跟踪分支】



--git pull  【在本地分支跟踪远程跟踪分支后，就可以直接拉取到远程跟踪分支到本地分支上】





--git switch -c    [本地分支] [远程分支]         【创建并跟踪一个远程跟踪分支】

--git switch --track  [远程分支]                 【创建并跟踪一个远程跟踪分支且同名】

--git branch -vv     【查看本地分支和远程分支的关系】