# 팩토리얼
팩토리얼 마지막 수가 return 을 해줌으로써,
호출했던 함수들도 다 값으로 만들어진다


# 조합수 
1~n 가 있고 m개의 방법의 수를 뽑는 방법은 [조합의 수] 를 가르킨다 

```javascript
DFS(level, startIndex) {
  if(level === m) {
    return 
  }

  for(let i = startIndex; i < n; i++) {
    DFS(level + 1, startIndex + 1)
  }
}
```