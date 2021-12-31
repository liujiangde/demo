// 存在一个由 n 个节点组成的无向连通图，图中的节点按从 0 到 n - 1 编号。

// 给你一个数组 graph 表示这个图。其中，graph[i] 是一个列表，由所有与节点 i 直接相连的节点组成。

// 返回能够访问所有节点的最短路径的长度。你可以在任一节点开始和停止，也可以多次重访节点，并且可以重用边。

//我的思路，将这个所有节点的连接关系先列出来。 筛选出那些只有一条线的点，开头和结尾最好是从这些点里面选


/**
 * @param {number[][]} graph
 * @return {number}
 */
 var shortestPathLength = function(graph) {
    
  //我的思路，将这个所有节点的连接关系先列出来。
  // 筛选出那些只有一条线的点，开头和结尾最好是从这些点里面选，最好两个点的距离是最远的
      let max = 0;
      let oneLine = [] //只有一条线的点,也有可能没有这样的点
      graph.forEach((item, index) => {
       if(item.length === 1 ) oneLine.push(index);
      })
      //先不管   认为 oneLine 第一个和最后一个是最远的
      
  };