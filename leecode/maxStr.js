
const  ps1 =  ""
const lengthOfLongestSubstring = function(s) {
  // 切割字符串
  const temp = s.split('')
  // 字符串为空
  if (temp.length === 0) return 0;
  //需要考虑只有一种字符的字符串
  let max = 1;
  // let myset = new Set()
  for(let i = 0; i < temp.length; i++){
      let myset = new Set()
      myset.add(temp[i])
      let count = 1;
      for (let j= i+1 ; j < temp.length; j++ ){
      myset.add(temp[j]);
      
      if(myset.size <= count){
          myset.clear();
          break;
      }
      count++;
      max = max < count ? count : max;
      }
  }
  return max;
}
console.log(lengthOfLongestSubstring(ps1));
lengthOfLongestSubstring(ps1)
