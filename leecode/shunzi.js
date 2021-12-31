// Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

// 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。


// 输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// 输出：true
// 解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。

// 输入：hand = [1,2,3,4,5], groupSize = 4
// 输出：false
// 解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。

// 1 <= hand.length <= 104
// 0 <= hand[i] <= 109
// 1 <= groupSize <= hand.length

// 执行用时：
// 868 ms, 在所有 JavaScript 提交中击败了7.41%的用户 
// 内存消耗：45.1 MB, 在所有 JavaScript 提交中击败了 48.15% 的用户

// 耗时太久个人分析： 时间复杂度是n 3 次方，

// 一个写的很好的例子
// 链接：https://leetcode-cn.com/problems/hand-of-straights/solution/2chong-jie-fa-shuang-zhi-zhen-ha-xi-biao-wf77/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


const hand =[1,2,3,6,2,3,4,7,8]
const groupSize = 3
var isNStraightHand = function(hand, groupSize) {

    const length = hand.length
    // 简单判断下能不能能不能成功分组，不能则直接返回false
    if(!((hand.length)%groupSize) === 0) return false;
    //数组排序
    hand.sort((a ,b) =>  a-b )
    //因为下面对数组操作的方法是会修改原数组的， 所以直接先用length接收原数组的长度
    // 两层循环 第一层循环是分组 第二层循环是确定每一组的元素列表，我这直接将每一组数据直接删除了
    for (let num = 0; num < (length/groupSize) + 1; num++) {
    // 临时的数组元素下标，默认为0，因为我是直接将每一组的数据直接找出来然后删除，
    // 所以每一次循环都是从0开始
    let  tempIndex =0;
    let tempArr = []
    for (let index = 0; index < groupSize; index++) {
      const element = hand[tempIndex];
      if (index < groupSize - 1  && hand.indexOf(element + 1) === -1 ) {
            return false
      }
      hand.splice(tempIndex,1)

      //确定当前组的下一个元素的位置
      tempIndex =  hand.indexOf(element + 1)
      tempArr.push(element)
      // 最后一组的值确定之后
     if (hand.length === 0) {
        return true;
     }
    }
  }
  return true;
};
isNStraightHand(hand,groupSize)