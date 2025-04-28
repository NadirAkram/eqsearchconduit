function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
	alert("Copied the text: " + copyText.value);
}
let tags;
let from;
let cableTag;
document.getElementById("search").onclick = function() {
	tags = document.getElementById("tag").value;
	from = document.getElementById("from").value;
 cableTag = document.getElementById("cableTag").value;
	const fromToArray = from.split("+");
	const yourArray = tags.split(",");
 const yourArray2 = tags.split(",");
	const count = yourArray.length;
	const count2 = fromToArray.length;
 const count3 = yourArray2.length;
	const list = [];
	const list2 = [];
 const list3 = [];
	for (let i = 0; i < count; i++) {
		const string1 = `<condition test="contains" flags="74"> <category> <name internal="LcRevitData_Element">Element</name> </category> <property> <name internal="lcldrevit_parameter_Raceway Sequence ID_PG_IDENTITYDATA">Tag Number</name> </property> <value> <data type="wstring">${yourArray[i]}</data> </value> </condition>`;
		list.push(string1);
	}
	const newString = list.join("\n");
	for (let j = 0; j < count2; j++) {
		const string2 = `<condition test="contains" flags="74"> <category> <name internal="LcRevitData_Element">Element</name> </category> <property> <name internal="LcRevitPropertyElementName">Equipment Number</name> </property> <value> <data type="wstring">${fromToArray[j]}</data> </value> </condition>`;
		list2.push(string2);
	}
	const fromtostring = list2.join("\n");

for (let k = 0; k < count3; k++) {
		const string3 = `<condition test="contains" flags="74"> <category> <name internal="LcRevitData_Element">Element</name> </category> <property> <name internal="LcRevitPropertyElementName">Cable Tag</name> </property> <value> <data type="wstring">${yourArray2[k]}</data> </value> </condition>`;
		list3.push(string3);
	}
	const cableTagString = list3.join("\n");

	const finalString = `<?xml version="1.0" encoding="UTF-8" ?> <exchange xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://download.autodesk.com/us/navisworks/schemas/nw-exchange-12.0.xsd" units="ft" filename="" filepath=""> <findspec mode="all" disjoint="0"> <conditions>${newString}${fromtostring}${cableTagString} </conditions> <locator>/</locator> </findspec> </exchange>`;
	document.getElementById("myInput").textContent = `${finalString}`
}
