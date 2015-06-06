var storage=window.localStorage;
var index=storage.length;
function addStore(){
	storage.setItem(index,document.insert.site.value);
	document.insert.site.value="";
	index=storage.length;
	showPage();
	
}

function clearSite(){
	storage.clear();
}


function showPage() {
	
	document.body.innerHTML = "";
	
	document.write("<html>");
	document.write("<head>");
	document.write("<meta charset='UTF-8'>");
	document.write("<title>Insert title here</title>");
	document.write("<link rel='stylesheet' href='style.css'>");
	document.write("</style>");
	document.write("</head>");
	document.write("<body >");
	document.write("<div>");

	var out="";
	for(var i=0; i<index; i++){
		out=storage.getItem(i);
		document.write("<div class='page'>");
		document.write("<a href='http://www." + out
				+ "'>");
		document.write("<img src='http://mini.s-shot.ru/1024x768/150/jpeg/?"
						+ out + "'>");
		document.write("<center>");
		document.write("<i>" + out + "</i>");
		document.write("</center>");
		document.write("</a>")
		document.write("</div>");
		
	}
	document.write("<div class='page'>");
	document.write("<form action='post' name='insert' >");
	document.write("<input type='text' name='site' placeholder='Insert name site' value=''> <input type='button'");
	document.write("name='exec' value='Add site' onclick='javascript:addStore()'>");
	document.write("<input type='button'");
	document.write("name='outStor' value='Clear sites' onclick='javascript:clearSite()'>");
	document.write("</form>");
	document.write("</center>");
	
	document.write("</div>");
	
	document.write("</div>");
	document.write("</body>");
	document.write("</html>");
}