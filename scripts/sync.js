const fs = require('fs');
const { copyFolder } = require('./utils');
const consola = require('consola')

const rootPath = process.cwd()
const exampleComponentsPath = `${rootPath}/example/src/components`
const componentsPath = `${rootPath}/components`


if (fs.existsSync(exampleComponentsPath)){

}else{
    consola.start('Starting copy')
    fs.mkdirSync(exampleComponentsPath)                 //创建目录
    copyFolder(componentsPath, exampleComponentsPath, function (err) {          //拷贝目录
        if (err) {
            consola.error(err)
        }
        consola.success('copy success')
    })

}


