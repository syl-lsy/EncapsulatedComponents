const propsObj = {
  // 总共多少页
  total: {
    type: Number,
    default: 0,
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 能显示的最大页码按钮数量
  pageCount: {
    type: Number,
    default: 10,
  },
  // 主题颜色
  type: {
    type: String,
  },
  //   按钮大小
  size: {
    type: String,
  },
}

export default propsObj
