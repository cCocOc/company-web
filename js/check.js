function Enroll1() {
		if(GoToname()) {
			if( GoTotell() ){
				if(GoToemail()) {
					if(GoToaddress()) {
						alert("확인되었습니다.");
					}
				}
			}
		}
	
}

function Enroll2() {
	if(GoToname()) {
		if( GoToid() ){
			if(GoToemail()){
			alert("확인되었습니다.");
			}
		}
	}

}

function Enroll3() {
	if(GoToname()) {
			if(GoToemail()){
			alert("확인되었습니다.");
			}
		}

}


// 이메일 확인
function GoToemail()
{
	let email = document.getElementById('email').value;
      if( !(email) ) {
        alert("이메일을 입력해주세요.");
        document.getElementById('email').focus();
        return false;
      } else if(!CheckEmail(email)) {
		alert("이메일 형식이 아닙니다.");
        document.getElementById('email').focus();
        return false;
	  }
	  return true;
	}
  function CheckEmail(str)
{
    var reg_email =/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(str))   {
     return false;
    }
    else {
        return true;
    }
}

// 이름확인
function GoToname()
{
	let name = document.getElementById('name').value;
      if( !(name) ) {
        alert("이름을 입력해주세요.");
        document.getElementById('name').focus();
        return false;
      } else if(!Checkname(name)) {
		alert("이름이 아닙니다.");
        document.getElementById('name').focus();
        return false;
	  }
      return true;
	}
  function Checkname(sth)
{
    var reg_name =/^([ㄱ-ㅎ가-힣a-zA-Z]+)$/;
    if(!reg_name.test(sth))   {
     return false;
    }
    else {
        return true;
    }
}

// 아이디확인
function GoToid()
{
	let id = document.getElementById('id').value;
      if( !(id) ) {
        alert("아이디를 입력해주세요.");
        document.getElementById('id').focus();
        return false;
      } 
      return true;
	}

// 비밀번호확인
function GoTopassword()
{
	let password = document.getElementById('password').value;
      if( !(password) ) {
        alert("아이디를 입력해주세요.");
        document.getElementById('password').focus();
        return false;
      } 
      return true;
	}


// 전화번호 확인
function GoTotell()
{
	let tell = document.getElementById('tell').value;
      if( !(tell) ) {
        alert("전화번호를 입력해주세요.");
        document.getElementById('tell').focus();
        return false;
      } else if(!Checktell(tell)) {
		alert("전화번호 형식이 아닙니다.");
        document.getElementById('tell').focus();
        return false;
	  }
      return true;
	}
  function Checktell(uth)
{
    var reg_tell =/\d{2,3}-\d{3,4}-\d{4}/;
    if(!reg_tell.test(uth))   {
     return false;
    }
    else {
        return true;
    }
}

// 주소확인
function GoToaddress()
{
	let address = document.getElementById('address').value;
      if( !(address) ) {
        alert("주소를 입력해주세요.");
        document.getElementById('address').focus();
        return false;
      } 
	  return true;
}