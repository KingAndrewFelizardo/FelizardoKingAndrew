function quiz(){
    const sports={
        question:"Which one is correct team name in NBA?",
        options:["New York Bulls",
        "Los Angeles Kings",
        "Golden State Warriros",
        "Huston Rocket"],
    
        answer:"Huston Rocket",
    }
    const math={
        question: "5 + 7 = ?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],

        answer:"12"
    }
}
quiz(sports.question)
quiz(sports.options)
quiz(sports.answer)
quiz(math.question)
quiz(math.options)
quiz(math.answer)
