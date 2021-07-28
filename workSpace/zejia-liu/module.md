# module 目录
把所有和后端的接口用axios进行封装，每个函数返回一个Promise，方便进行错误处理。所有函数放在一个文件里，方便调用。

# api选择
根据功能，选择了4个api，分别是
1. findByStatus (/pet/{petId}/uploadImage)
2. delete （/pet/{petId}）
3. add (/pet)
4. update  (/pet/{petId})

其中findByStatus, delete, add 是在原来的网站中就有使用的，而update是我们新调用的api

我们要实现的功能一共有5个，分别是
1. 展示已经出售的宠物
2. 展示正在出售的宠物，并且可以通过tags和category进行筛选
3. 新增加宠物
4. 更改宠物状态
5. 删除宠物

各个部分分别需要调用的api有
1. findBystatus
2. findBysataus
3. add 
4. update
5. delete

除了第三点的findById都很好理解。
