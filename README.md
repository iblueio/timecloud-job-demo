<p align="center">
  <img src="iblueio.png" alt="iBlue" width="100" height="100">
</p>
<h1 align="center">
  timecloud-job-demo
</h1>
<p align="center">
  A timecloud's schedule job demo.
</p>


## Test function

---

- 定时功能
- 任务超时
- 发送信号SIGUSR2请求子进程退出
- 子进程退出失败抛出异常
- 异常处理
- 普通日志与异常日志分离
- 微信通知

## Task time

---

### 每分钟0秒  


写日志测试

(测试日志是否被分开写入正常日志和错误日志)

---

### 每分钟10秒 

抛出异常测试

(抛出异常后自动重试，再次抛出异常后会接到微信报警)

---

### 每分钟30秒

超时测试

(10秒的任务，限制3秒，超时后发送SIGUSR2信号，五秒后检查进程是否退出，这里故意设置成不会退出，此时会接到微信报警)

---
