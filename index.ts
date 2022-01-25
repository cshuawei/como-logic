/// <reference path="index.d.ts" />

export default {
  /**
   * 搜索目标ID的所有父级ID--test
   * @targetId 目标ID
   * @items 要执行搜索的数组，数据格式示例：[{id: '111111', label: '父级', children: [{id: '222222', label: '子级1', children: [{ id: '333333', label: '子级2' }]}]}]
   * @options 可选参数，设置id和children的别名
   * @parentId 父级的id，用以累加
   * @returns 返回包含目标ID及其父级ID的数组集合
   */
  findTreeIds (targetId: Logic.FindTreeIds.Id, options?: Logic.FindTreeIds.Options): Logic.FindTreeIds.Return {
    let findIds: string | undefined
    const idkey = options?.id || 'id'
    const childrenKey = options?.children || 'children'
    return function handleLoop (items: Logic.FindTreeIds.Items, parentId?: Logic.FindTreeIds.Id) {
      for (const item of items) {
        item[idkey] += parentId ? `,${parentId}` : ''
        if (item[idkey].includes(targetId)) {
          findIds = item[idkey];
          break
        }
        if (item[childrenKey] && item[childrenKey].length) {
          handleLoop(item[childrenKey], item[idkey]);
        }
      }
      const findIdsArr = findIds?.split(",") || []
      return findIdsArr.reverse()
    }
  },
}