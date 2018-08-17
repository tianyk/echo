## Echo Server

[Echo](http://echo.kekek.cc)

1. 启动服务：
```
ulimit -n 10240

touch /var/log/echo.log
nohup node echo.js >/var/log/echo.log 2>&1 &
```

2. 测试一下：
```
telnet echo.kekek.cc 7000
```
