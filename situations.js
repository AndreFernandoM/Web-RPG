const data = {
    "situations": 
    [
        {
            "id": 0,
            "description": "Você esta andando em um beco de madrugada quando sente uma mão em seu ombro",
            "options": 
            [
                {
                    "description":"Você sai correndo",
                    "fail":{
                        "damage":5,
                        "description":"Você tropeça e bate a cabeça no chão"
                    },
                    "sucess":{
                        "bonus": 8,
                        "description":"Você chega em segurança em uma pousada"    
                    }
                },
                {
                    "description": "Você se vira",
                    "fail":{
                        "damage":5,
                        "description":"Você tropeça e bate a cabeça no chão"
                    },
                    "sucess":{
                        "bonus": 10,
                        "description":"Era apenas seu amigo"    
                    }
                }
            ]
        },

        {
            "id": 1,
            "description": "Você esta no mercado quando vê um velha sendo roubada",
            "options": 
            [
                {
                    "description":"Você persegue os ladrões",
                    "fail":{
                        "damage":20,
                        "description":"Eles te metem a porrada"
                    },
                    "sucess":{
                        "bonus": 2,
                        "description":"Você joga uma lata na cabeça dos ladrões e eles saem correndo"    
                    }
                },
                {
                    "description": "Você chama os seguranças",
                    "fail":{
                        "damage":10,
                        "description":"Você é completamente ignorado"
                    },
                    "sucess":{
                        "bonus": 1,
                        "description":"Eles saem correndo na sua direção, fazendo com que os ladrões fujam"    
                    }
                }
            ]
        },

        {
            "id": 2,
            "description": "Você esta em uma floresta e derrepente aparece um GOBLIN",
            "options": 
            [
                {
                    "description":"Você tenta mata-lo, afinal 'é apenas um globin' ",
                    "fail":{
                        "damage":50,
                        "description":"Ele te metem a porrada"
                    },
                    "sucess":{
                        "bonus": 5,
                        "description":"Surpreendentemente você consegue matar ele, uma tarefa dificil para alguem que nem você "    
                    }
                },
                {
                    "description": "Você tenta assutar ele com um grito 'feroz'",
                    "fail":{
                        "damage":10,
                        "description":"Ele simplesmente ri do seu grito 'masculo' e te mete a porrada"
                    },
                    "sucess":{
                        "bonus": 5,
                        "description":"Ele se afasta de você, mas não pelo seu grito, mas sim por ter sido uma situação bem constrangedora "    
                    }
                }
            ]
        }, 
 
        {
            "id": 3,
            "description": "Você ta num deserto???? E tem uma gostosa desidratada mais à frente",
            "options": 
            [
                {
                    "description":"Você como um bom cavaleiro oferece água para a bela moça ",
                    "fail":{
                        "damage":15,
                        "description":"Como você estava muito nervoso, pelo seu primeiro contato com uma fêmea, acaba derrubando toda sua água na areia"
                    },
                    "sucess":{
                        "bonus": 5,
                        "description":"Uau parabéns! A mulher fica muito grata pela sua ajuda e te paga com um pinjente de ouro"    
                    }
                },
                {
                    "description": "Simplesmente ignorar por você ser um macho sigma que não precisa de femeas para ser feliz",
                    "fail":{
                        "damage":20,
                        "description":"Uma cobra escondida debaixo da areia te pica, provavelmente karma."
                    },
                    "sucess":{
                        "bonus": 5,
                        "description":"Ao ignorar a mulher você se ve indo na direção de uma depressão estranha na areia, que ao checar é um puta de um machado foda pra caralho feito de um metal bem resistente "    
                    }
                }
            ]
        },


    ]

}