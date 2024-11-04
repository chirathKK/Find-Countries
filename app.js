function search() {

  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {


      let country = document.getElementById("searched_country");
      let tbl = `<tr>
        <th>Country Name  </th>
        <th>Flag</th>
      </tr>`

      data.forEach(element => {

        tbl += `<tr>
        <td>${element.name.common}</td>
        <td>${element.flag}</td>
      </tr>`

        console.log(element.name.common);

      })
      country.innerHTML = tbl;
    })

}
search();


function searchfor_country() {

let searchvalue=document.getElementById("txt_country").value;
let need=document.getElementById("countryneeded");

console.log(searchvalue);
  fetch(`https://restcountries.com/v3.1/name/${searchvalue}?fullText=true`)
    .then(res => res.json())
    .then(data => {data.forEach(obj => {

      need.innerHTML=obj.name.common;
      document.getElementById("img").innerHTML=`<img src="${obj.flags.png}" alt="">`

      document.getElementById("map").innerHTML=`<a  href="${obj.maps.googleMaps}">Go to Google Map</a> `;
      document.getElementById("population").innerHTML=`population of the country : ${obj.population}`;
      document.getElementById("name_official").innerHTML=`Official Name : ${obj.name.official}`;
      document.getElementById("capital").innerHTML=`Capital : ${obj.capital}`;
      document.getElementById("area").innerHTML=`Area : ${obj.area}`; 
      
    });
      
      // need.innerHTML=data.name.official;  
      
      
      })
}