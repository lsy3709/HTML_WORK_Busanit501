document.getElementById('signupForm').addEventListener('submit', function (e) {
    //e : event , 웹 브라우저에서 제공해주는 기능 도구. 객체
    e.preventDefault(); // 기본 제출 동작(서버제출) 막기 ( 페이지 리로드 방지)

    // FormData 클래스, 클래스는  변수, 상수, 기능(함수)들의 모음집
    // new FormData() : 클래스를 이용 할려면, 
    // 시동을 걸어야함.  같은 표현
    // 초기화를 함. 프로그래밍적으로 의미
    // 생성자를 호출한다고 함, 최종, 이렇게 표현을 하게 됨. 
    // this : 자기 자신 = document.getElementById('signupForm') 가리킴
    // formData 상수에는, 결론, 여러 기능이 들어 있다.
    const formData = new FormData(this); // 폼 데이터 수집

    // const 상수명 = 값 :  값을 변경이 불가능함. 
    // let 변수명 = 값,   : 값을 변경이 가능함. 
    let output = "" // 결과의 내용을 담을 변수, 초기에는 빈 문자열 초기화.

    // 단일 입력 필드 처리. 
    // 유저명 부터 표기 해보기. 
    // output = output + "내용"
    // output += "내용" ,  같은 의미
    // x = 1
    // x = x + 1 <=> x += 1

    // 백틱 `, `문자열을 표기함` 
    // 1번째 요소, 유저명 가져오기
    output += `출력되는 유저명 : ${formData.get('username')} \n`
    // 2번째 요소, 패스워드 가져오기, 
    output += `출력되는 패스워드 : ${formData.get('password')}\n`

    // 공통 : 결과를 화면에 표기 하는 부분 연결 
    document.getElementById('output').textContent = output

})