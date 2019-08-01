# react - note
GraphQL을 사용하기 위한 기본적인 서버 환경설정 

schema.js -> GraphQL 스키마를 작성(타입정의 필요)

resolvers.js resolve 함수는 각각의 쿼리에 대해 서버가 어떻게 반응하는지를 정의 *GraphQL의 핵심
(유사 - MVC 패턴 컨트롤러 역할)

schema와 resolver를 병합
const name = name({ typeDefs, resolvers });
export {name}

server.js  클라이언트와 통신하기 준비
