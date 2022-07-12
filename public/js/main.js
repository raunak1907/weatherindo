const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitbtn=document.getElementById('submitBtn');

const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const datahide=document.querySelector('.middle_layer')


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;

    if(cityVal===""){
          city_name.innerText=`please write the name before search`;
          datahide.classList.add('data_hide');
          

    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=dcf9568a3e446a9a3e9b07ae592fc46f`;
            const response=await fetch(url);
            const data=await response.json();
            var arrData=[data];
            const far=arrData[0].main.temp;
           const celc= parseInt(far-273);
            temp.innerText=celc;
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            
            const tempMood=arrData[0].weather[0].main;
            datahide.classList.remove('data_hide');

         if(tempMood=="Clear"){
           temp_status.innerHTML=
              "<i class='fas fa-sun' style='color:yellow'></i>";
         } else if(tempMood=="Clouds"){
            temp_status.innerHTML=
              "<i class='fas fa-cloud' style='color:#87CEEB'></i>";
         }else if(tempMood=="Rain"){
            temp_status.innerHTML=
              "<i class='fas fa-cloud-rain' style='color:#87CEEB'></i>";
         }else{
            temp_status.innerHTML=
              "<i class='fas fa-sun' style='color:yellow'></i>";
         }

            
           



        }catch{
            city_name.innerText=`please write the name properly`;
            datahide.classList.add('data_hide');
        }}

       
    
}
submitbtn.addEventListener('click',getInfo);