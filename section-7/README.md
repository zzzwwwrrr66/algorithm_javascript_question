# 섹션 6. sort, greedy, Decision (결정)

⭐︎　어려웠던거 (그림으로 그려보기)

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

---

## 그리디 정렬 ⭐︎
- one loop
- 이런상태의 배열이 어떤 기준에의해 정렬이 되어 있어야 한다 [[number, number], [number, number], [number, number]]
- 최대한 많은 것들을 수용할수 있는 범위가 높거나, 작은것 을 우선시하는 정렬을 하고 
- for 을 한번돈다 
### 8. 회의실 배정
- 한개 씩
- 그림으로 그려보면 쉬움 

### 9. 결혼식 
- 동시 
- 그림으로 그려보면 쉬움 
- sort 는 -1이 더 앞에임, a - b 오름차순, b - a 내림차순
- s , e 서로 다른 index 로 저장 [number, "s" or "e"] 하고 정렬 
- s 면 +1, e 면 -1

---

## 이분검색(binary search) ⭐︎
- O(log n) 속도 O(n) 보다 빠르다 
- sort 가 전제조건 
- lt, rt, mid( Math.floor(lt + rt / 2) )
- 찾는 숫자가 mid 보다 크면  rt = mid + 1; 작으면 lt = mid - 1;
- 결정알고리즘 
