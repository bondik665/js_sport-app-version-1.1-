const personDB = {
    gender:null,
    age:null,
    weight:null,
    height:null,
    activityCafficient:null,
    start(){
        
        this.gender = prompt('Укажите ваш пол:1-муж,2-жен')
        if(this.gender !=='1' && this.gender !=='2'){
            
            alert('Ввели неклоректные данные')
            this.gender = null;
            this.gender = +prompt('Укажите ваш пол:1-муж,2-жен')

        }
        
        this.age = +prompt('Ваш  возраст:');
        if(check(this.age)){
            this.age = null;
            this.age = +prompt('Ваш  возраст:')

        }
        this.weight = +prompt('Ваш  вес:');
        if(check(this.weight)){
            this.weight = null;
            this.age = +prompt('Ваш  вес:')

        }
        this.height = +prompt('Вваш  рост:');
        if(check(this.height)){
            this.age = null;
            this.age = +prompt('Вваш  рост:')

        }
        this.activityCafficient = +prompt('Выберете свой коэф активностbи:1.2 минимальный,1.3-умеренный,1.55-средний,1.7 -высокий,1.9-экстрим')
        if(this.activityCafficient !==1.2 && this.activityCafficient !==1.3 && this.activityCafficient !==1.55 && this.activityCafficient !==1.7 && this.activityCafficient !==1.9){
            alert('Ввели неклоректные данные')
            this.activityCafficient = null;
            this.activityCafficient = +prompt('Выберете свой коэф активности :1.2 минимальный,1.3-умеренный,1.55-средний,1.7 -высокий,1.9-экстрим');


        }
    },
    getBMI(){
        if(!this.weight && !this.height){
    alert('запустите метод personDB,start()')
        }
        const index = +(Math.pow((this.weight/this.height),2)*100).toFixed(2);
        console.log(index);
        if(index<18.5){
            console.log('Ниже нормального веса')
        }
        else if (index >= 18.5 && index < 25){
            console.log('нормальный вес')
        }
        else if (index >= 25 && index < 30){
            console.log('избыточный вес')
        }
        else if (index >= 30 && index < 35){
            console.log('нормальный вес')
        }
        else if (index >=35 && index < 45){
            console.log('Вы жирдяй')
        }
        else {
            console.log('Ахахах')
        }
    },
    getDailyCalories(){
        if(!this.weight && !this.height && !this.gender && !this.activityCafficient ){
            alert('запустите метод personDB,start()')
            }

        if(this.gender === '1'){
            this.DailyCalories = (10 * this.weight ) +(6.25 * this.height)-(5*this.age) + 5 * this.activityCafficient
        } 

        else if(this.gender === '2'){
            this.DailyCalories = (10 * this.weight ) +(6.25 * this.height)-(5*this.age) -161 * this.activityCafficient
        }  
    }
}    


function check(value){
    if(value == ''|| value <= 0 || isNaN(value)){
        alert('Ввели неклоректные данные')
        return true
    }
}

//запуск методов
personDB.start()
personDB.getBMI()
personDB.getDailyCalories()
console.log(personDB)