

$(document).ready(()=>{
	
	// keypress :키보드를 눌렀을때, 뉴르는 동안 계속
	// keydown : 키보드를 눌렀을때, 컨트롤 쉬프트 알트 감지, 한번만
	// keyup :키보드에서 손을 뗐을때
	
	
	$('input').keydown(function(event){
		
		// 엔터가 아니면 진행 금지
// if(event.keyCode!= 13)return;
	
		// 9번은 탭 키
		if(event.keyCode!= 9)return;
		var thisId= $(this).attr('id')
	
		
		// thisId값이 intkor or inteng or intmath이면
		if(thisId =='intKor' ||
			thisId =='intEng' ||
			thisId =='intMath') sumNum();
		
		$(this).parent().next().find('input').focus();
		
		
		/*
		 * if(thisId == 'intKor') sumNum(); if(thisId =='intEng') sumNum();
		 * if(thisId =='intMath') sumNum();
		 */
	})
	
	$("#saveBtn").click(()=>{
		if($("#strName").val() == ""){
			alert("학생이름은 필수항목 입니다")
			$("#strName").focus();
			return;
		}
		$('form').submit();
	})
	
	
	
	
	
	/*
	 * $("#intKor").keydown((event)=>{ // input text에는 val함수로 값 넣고 읽기
	 * if(event.keyCode == 13){ sumNum(); $("#intEng").focus(); } })
	 * 
	 * 
	 * $("#intEng").keydown((event)=>{ if(event.keyCode == 13) { sumNum();
	 * $("#intMath").focus(); } })
	 * 
	 * 
	 * 
	 * $("#intMath").keydown((event)=>{ if(event.keyCode == 13) sumNum(); })
	 * 
	 */
	
	function sumNum(){
		var intKor=$("#intKor").val();
		var intEng=$("#intEng").val();
		var intMath=$("#intMath").val();
		
		var sum= Number(intKor) + Number(intEng) + Number(intMath);
		// var sum=(intKor*1)+(intEng*1)+(intMath*1);
		
		
		$("#intTotal").val(sum);
		
		var avg = sum >0 ? sum/3 : 0;
		$("#intAvg").val(avg);
	}
	
	/*
	 * 
	 * $("#intTotal").keydown((event)=>{ if(event.keyCode == 9) avgNum(); })
	 * 
	 * 
	 * function avgNum(){ var intTotal=$("#intTotal").val();
	 * 
	 * var avg= Number(intTotal/3);
	 * 
	 * $("#intAvg").val(avg);
	 *  }
	 */
})