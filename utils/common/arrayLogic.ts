// 배열 안 seq 값을 자동으로 재할당
export const newArrAllocateIdSeq = (arr: any) => {
  return arr.map((item: any, idx: any) => ({
    ...item,
    id: idx,
    seq: idx,
  }));
};
//

// 배열 안 seq 값을 자동으로 재할당
// [TIP] 객체 배열에서 첫 번째 인덱스(index 0) 제외하고 로직 실행
export const newArrAllocateWithout0IndexSeq = (arr: any) => {
  return arr.slice(1).map((item: any, idx: any) => ({
    ...item,
    seq: idx,
  }));
};
//

// [TIP] 객체 배열에서 id 값이 있다면 제외하고 로직 실행
export const newArrAllocateNotIdSeq = (arr: any) => {
  return arr
    .filter((item: any) => !item.id)
    .map((item: any, idx: any) => ({
      ...item,
      id: idx + 1,
      seq: idx,
    }));
};
//
