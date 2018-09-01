import * as path from 'path'
import * as fs from 'fs'

// jwt私钥
export const JWT_SECRET_KEY = 'showcase'

export const { APP_ENV } = process.env

// 环境配置文件, .env为基础文件, 请保证务必存在(修改名称后修改baseDotenvPath), 否则自行修改此处逻辑
const baseDotenvPath = path.resolve(process.cwd(), '.env')
export let DOTENV_PATH = path.resolve(process.cwd(), `.${APP_ENV}.env`)
if (!fs.existsSync(DOTENV_PATH)) {
    DOTENV_PATH = baseDotenvPath
}

interface IRouterConfig {
    path: string
    exact: boolean
}

export const UNNECESSARY_AUTH_ROUTERS: IRouterConfig[] = [
    {
        path: '/auth/login',
        exact: true,
    },
]
