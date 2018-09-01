import { isDocumentExist, createResData } from 'utils/common'

/**
 * 扩展Service类以方便调用
 * 集成公共方法
 *
 * @export
 * @class ServiceExt
 */
export default class ServiceExt {
    /**
     * 通过DB查询文档是否已存在
     *
     * @memberof ServiceExt
     */
    readonly isDocumentExist = isDocumentExist
    /**
     * 组装接口返回数据
     *
     * @memberof ServiceExt
     */
    readonly createResData = createResData
}
