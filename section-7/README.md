# 섹션 6. sort, greedy, Decision (결정)

## sort 
- 2 loop 
  * i와 비교를 위해서 j 는 i + 1 값으로 돈다 
- 제일 낮은값을 고르면서, minNum의 index를 저장 다돌면 현재의 index와 minNum의 index를 swap
- 마지막에 한번 swap 함 

## bubble 
- i--
- i loop 에서 맨뒤 맨처음은 안돌아도된다 => 2 loop
- desision of last number => loop 를 통해 맨뒷자리의 숫자가 결정된다
- i 값을 사용하지않는다 
- j 와 j+1 를 비교후 swap


## insertion 삽입정렬 
- 2 loop i = 1, j = i - 1; i--;
- "temp = arr[i]" 를 정해놓고 올바른 위치를 찾아간다고 생각하면 편하다 
- 


## 그리디 정렬 
- 이런상태의 배열의 정렬이 되어 있어야 한다 [[number, number], [number, number], [number, number]]
### 8. 회의실 배정