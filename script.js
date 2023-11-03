function Person(n,a){
  this.name = n;
  this.age = a;
  this.introduce = function(){
    return `제 이름은 ${this.n}이고 제 나이는 ${this.a}입니다.`}
}

/* 자바스크립의 모든 함수에는 함수와 일대일로 매칭되는 프로토타입(Prototype)이라는 객체가 있습니다.
 * /  


/*
Person.prototype ------> Person Prototype Object(프로토타입)

Person.prototype.constructor -----> Person function(자기 자신)
 */ 