function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	alert("Copied the text: " + copyText.value);
}
let tags;
let from;
document.getElementById("search").onclick = function() {
	tags = document.getElementById("tag").value;
	from = document.getElementById("from").value;
	const fromToArray = from.split("+");
	const yourArray = tags.split(",");
	const count = yourArray.length;
	const count2 = fromToArray.length;
	const list = [];
	const list2 = [];
	for (let i = 0; i < count; i++) {
		const string1 = `<condition test="contains" flags="74"> <category> <name internal="LcRevitData_Element">Custom</name> </category> <property> <name internal="lcldrevit_parameter_Raceway Sequence ID_PG_IDENTITYDATA">Tag Number</name> </property> <value> <data type="wstring">${yourArray[i]}</data> </value> </condition>`;
		list.push(string1);
	}
	const newString = list.join("\n");
	for (let j = 0; j < count2; j++) {
		const string2 = `<condition test="contains" flags="74"> <category> <name internal="LcRevitData_Element">Custom</name> </category> <property> <name internal="LcRevitPropertyElementName">Equipment Number</name> </property> <value> <data type="wstring">${fromToArray[j]}</data> </value> </condition>`;
		list2.push(string2);
	}
	const fromtostring = list2.join("\n");
	const finalString = `<?xml version="1.0" encoding="UTF-8" ?> <exchange xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://download.autodesk.com/us/navisworks/schemas/nw-exchange-12.0.xsd" units="ft" filename="" filepath=""> <findspec mode="all" disjoint="0"> <conditions>${newString}${fromtostring} </conditions> <locator>/</locator> </findspec> </exchange>`;
	document.getElementById("myInput").textContent = `${finalString}`
}
