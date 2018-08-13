#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYNAME=deploy_${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz

SERVER=74.82.196.169

tar -zcvf ./${DEPLOYFILES} ./src ./.nestcli.json ./package-lock.json ./package.json ./tsconfig.json ./tslint.json
# 构建成功后打包文件上传到服务器
scp -P 27663 -o StrictHostKeyChecking=no ./${DEPLOYFILES} root@${SERVER}:/home/showcase/tarfiles

rm -f ./*.tar.gz

# 解压文件
ssh -p 27663 -o StrictHostKeyChecking=no root@${SERVER} tar xzf /home/showcase/tarfiles/${DEPLOYFILES} -C /home/showcase

if [ $? -ne 0 ]; then
    echo "部署失败"
else
    echo "部署成功"
fi
