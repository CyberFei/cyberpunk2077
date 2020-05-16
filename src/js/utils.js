/**
 * 补位函数
 * @param {待补位数字} num
 * @param {目标位数} length
 */
export function complement(num, length = 2) {
  let numS = num + "";
  let need = length - numS.length;
  for (let i = 0; i < need; i++) numS = "0" + numS;
  return numS;
}
