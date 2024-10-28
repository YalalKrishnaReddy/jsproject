const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'af3bedb456msh6cf3b6fa3dba170p168b8cjsnd1d9095aa0a9',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

async function getdata(){
    try {
	const response = await fetch(url, options);
	const result = await response.json();
    let data = await result["data"];

    let div1=document.createElement("div");
    div1.className="container";

    let div2=document.createElement("div");
    div2.className=	"card";

    let h2=document.createElement("h2");
    h2.innerText=`${data}`;

    div2.appendChild(h2);
    div1.appendChild(div2);
    document.body.append(div1);

    } catch (error) {
	    console.error(error);
    }
    
}

getdata();
//---------------------------------------------
// let div1=document.createElement("div");
//     div1.className="container";

// let div2=document.createElement("div");
//     div2.className=	"card";

// let h2=document.createElement("h2");
//     h2.innerText=`Welcome`;

// div2.appendChild(h2);
// div1.appendChild(div2);
// document.body.append(div1);