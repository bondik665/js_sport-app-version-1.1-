 let  gender;
 const form = document.forms.main;
 let activityCafficient;
 const steps = document.querySelectorAll('.step');
 let age;
 let weight;
 let growth;

 //create listenerEVEnt
  //step 1
 document.querySelector('.calculator-gender__items').addEventListener('click',(e) =>{
    document.querySelectorAll('.calculator-gender__item').forEach(i=>{
        i.classList.remove('active')
    })
        
    if(e.target.parentElement.closest('.calculator-gender__item')){
        e.target.parentElement.classList.add('active')
    }
    document.querySelector('#step-1-btn').addEventListener('click',(e)=>{
        e.preventDefault()
        gender = form.gender.value;
        steps[0].style.display="none"
        steps[1].style.display="block"
        console.log(gender)

    })
 })
 //step 2 create activity
 document.querySelector('.calculator-activity__items').addEventListener('click',(e)=>{
    document.querySelectorAll('.calculator-activity__item').forEach(i=>{
        i.classList.remove('active')
    })
    if(e.target.parentElement.closest('.calculator-activity__item')){
        e.target.parentElement.classList.add('active')
    }
 })

 document.querySelector('#step-2-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    activityCafficient = form.activity.value;
    steps[1].style.display="none"
    steps[2].style.display="block"
        console.log(activityCafficient)
 })
 //step 3 enter user value 
 function check(param){
    if(param.validity.rangeOverFlow || param.validity.rangeUnderFlow){
        alert('Вы ввели недопустимое значение')
    }
    return false

 }
form.age.addEventListener('blur',(e)=>{
if(!check(e.target)){
    age = e.target.value;
    }
})
form.growth.addEventListener('blur',(e)=>{
    if(!check(e.target)){
        growth = e.target.value;
        }
    })
form.weight.addEventListener('blur',(e)=>{
    if(!check(e.target)){
        weight = e.target.value;
        console.log(weight)
        console.log(growth)
        console.log(age)
        }
    }) ;
//step 4 == finaly block 
document.querySelector('#step-result').addEventListener('click',(e)=>{
    e.preventDefault();
    steps[2].style.display="none"
    document.querySelector('.calculator-result').style.display= 'block'
    const index = +(Math.pow((weight/growth),2)*100).toFixed(2);
    document.querySelector('#imt-value').innerHTML = index
    const result = getDailyCalories()
    document.querySelector('#nc').innerHTML = result;
});

function getDailyCalories(){
    if(gender === 'man'){
        return (10 * weight ) +(6.25 * growth)-(5*age) + 5 * activityCafficient
    } 

    else{
         return (10 * weight ) +(6.25 * growth)-(5*age) -161 * activityCafficient
    }  
}
;