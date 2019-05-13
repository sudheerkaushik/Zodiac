import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {
            id: 1,
            name: "Aries",
            facts: [
                {
                    fact1:
                        "Don’t mess with them, they know themselves better than you do.."
                },
                {
                    fact2:
                        "90% of the times, their mood is like “Please don’t wreck my aura”"
                },
                {
                    fact3:
                        "It is really straightforward for them, you either show up or keep your mouth shut."
                },
                {
                    fact4:
                        "Don’t dare to mess with an Aries woman, she will drag you to hell and mind you she will do it carrying that contagious smile on her face."
                },
                {
                    fact5:
                        "When an Aries shows up, better stay out of their way."
                }
            ],
            image: "~/images/zodiac/zodiac_11.png"
        },
        {
            id: 2,
            name: "Tauras",
            facts: [
                {
                    fact1:
                        "These guys have a high tolerance for any sh*t, but if you exceed that limit, you better be prepared for the consequences."
                },
                {
                    fact2:
                        "They are carefree. You might think, they are thinking about something serious but in reality they are sh*t worried just about they are eating for lunch."
                },
                {
                    fact3:
                        "You can never think of breaking these people, they are hard core fighters. They will fight beyond you can even imagine."
                },
                {
                    fact4:
                        "You better be least dramatic with them, they wouldn’t prefer hanging out with you ever again if you are that so called “melodramatic”."
                },
                {
                    fact5:
                        "The funniest part about them is if they are making fun of you, believe it, it simply means they are protecting you."
                }
            ],
            image: "~/images/zodiac/zodiac_13.png"
        },
        {
            id: 3,
            name: "Gemini",
            facts: [
                {
                    fact1:
                        "Don’t bother yourself to judge if a Gemini loves you or not. Be patient and calm to get the answer."
                },
                {
                    fact2:
                        "They don’t need your silly jokes to give them happiness, they are enough for themselves."
                },
                {
                    fact3:
                        "These guys are hell of smart, they will sit in a corner and just think,     mind you for them this is an exercise for their brains."
                },
                {
                    fact4:
                        "If they pull themselves first while you are kissing, then be assured you have blown it."
                },
                {
                    fact5:
                        "Geminis are passionate, they would relish to indulge in healthy flirting with you."
                }
            ],
            image: "~/images/zodiac/zodiac_15.png"
        },
        {
            id: 4,
            name: "Cancer",
            facts: [
                {
                    fact1:
                        "Cancerians are shy people, but give them 2 shots and you will laugh out loud seeing what happens."
                },
                {
                    fact2:
                        "These guys are f*cking foodies, love eating but hate sharing. So, feel yourself privileged and lucky, if they share their food with you."
                },
                {
                    fact3:
                        "You better don’t lie to them, these super smart fellas to judge you well. Better be what you are in front of them."
                },
                {
                    fact4:
                        "Messing with a Cancerian…OK Fine! Thinking to wreck their family or friends, stay back, hold on….they will burn you down."
                },
                {
                    fact5:
                        "You preferably start to adjust with your cancerian partner mood swings, they are like that."
                }
            ],
            image: "~/images/zodiac/zodiac_21.png"
        },
        {
            id: 5,
            name: "Leo",
            facts: [
                {
                    fact1:
                        "Don’t be impatient to judge a Leo. They are sort of choosy and take time to get comfortable with you."
                },
                {
                    fact2:
                        "Don’t dare to screw with them. From the most sweetest person on Earth, they can turn to someone who is way too rude to handle."
                },
                {
                    fact3:
                        "One word to explain a Leo’s personality: Amazing"
                },
                {
                    fact4:
                        "They love imagination and fantasy world."
                },
                {
                    fact5:
                        "They are full of affection and love. If you are the partner, don’t be surprised if they spend the whole day wrapped in your arms."
                }
            ],
            image: "~/images/zodiac/zodiac_23.png"
        },
        {
            id: 6,
            name: "Virgo",
            facts: [
                {
                    fact1:
                        "If you are lucky enough, you might get to see the wild side of Virgos."
                },
                {
                    fact2:
                        "Virgos     are the sole inventors of the so called “Plan B”. They will always have a backup plan, if you ditch on the last moment."
                },
                {
                    fact3:
                        "Count on these fellas for a true opinion regarding any topic, beware it might even hurt as they would speak the truth."
                },
                {
                    fact4:
                        "They can’t tolerate any sort of bullsh*t. They will leave at the first sight of it."
                },
                {
                    fact5:
                        "Virgos     strongly believe in themselves. So don’t think they will fight back during an argument or even try to explain things."
                }
            ],
            image: "~/images/zodiac/zodiac_25.png"
        },
        {
            id: 7,
            name: "Libra",
            facts: [
                {
                    fact1:
                        "You will be lucky to have them as your partner. They will be there for you each time you need them."
                },
                {
                    fact2:
                        "These guys are quick to fall, will forgive easily, care for someone like anything but definitely this s*cks at times."
                },
                {
                    fact3:
                        "Funny     but at times a Libra will become their own worst enemy."
                },
                {
                    fact4:
                        "You don’t have a logic to support your conversation, sorry these guys have no time for such useless talks."
                },
                {
                    fact5:
                        "They are bad at making decisions, their minds fluctuate like a switch."
                }
            ],
            image: "~/images/zodiac/zodiac_31.png"
        },
        {
            id: 8,
            name: "Scorpio",
            facts: [
                {
                    fact1:
                        "Simply be transparent, don’t hide things and speak the truth, this what a Scorpio looks for in their love partner."
                },
                {
                    fact2:
                        "These guys are too hard to be predicted. You can’t read their face to tell about their qualities."
                },
                {
                    fact3:
                        "Try these fellas only if you are ready for a commitment, else better keep that distance."
                },
                {
                    fact4:
                        "Don’t even think about f*cking with them, they are like the two ends of a string."
                },
                {
                    fact5:
                        "Don’t bother to play a question hour with these people, they are least interested."
                }
            ],
            image: "~/images/zodiac/zodiac_33.png"
        },
        {
            id: 9,
            name: "Sagittarius",
            facts: [
                {
                    fact1:
                        "Trying     to tame a Sagittarian, not worth the efforts, they love to be set free."
                },
                {
                    fact2:
                        "Don’t be astonished to check their reserves of memories. They can relate to something that might have happened ages ago."
                },
                {
                    fact3:
                        "They are honest and hate those sugar-coated and sweet talks. Better be straightforward with them."
                },
                {
                    fact4:
                        "Sagittarians can be freaks, crazy, wild on one hand and on the other maintain their tradition."
                },
                {
                    fact5:
                        "Short-tempered but the best part their anger vanishes within seconds."
                }
            ],
            image: "~/images/zodiac/zodiac_35.png"
        },
        {
            id: 10,
            name: "Capricorn",
            facts: [
                {
                    fact1:
                        "If you are an attention seeker, expect nothing from Capricorns."
                },
                {
                    fact2:
                        "You might not like their honesty. They will cook up conversation in a funny manner to speak out the truth."
                },
                {
                    fact3:
                        "Messed up with a Capricorn, watch out for the hard time coming your way."
                },
                {
                    fact4:
                        "They can be the funniest people to hang out with in a party."
                },
                {
                    fact5:
                        "Allow them to amaze you and you will get a crazy Capricorn in turn."
                }
            ],
            image: "~/images/zodiac/zodiac_01.png"
        },
        {
            id: 11,
            name: "Aquarius",
            facts: [
                {
                    fact1:
                        "They don’t give a damn about what people think of them; they will present themselves the way they want to."
                },
                {
                    fact2:
                        "At the end of the day, they need time for themselves to think     over their actions carried out in the da"
                },
                {
                    fact3:
                        "Don’t call for problems by judging an Aquarius before you actually know about them."
                },
                {
                    fact4:
                        "Don’t even think of controlling them, they will break all rules to make you understand where you stand."
                },
                {
                    fact5:
                        "If you like being rough in the bedroom, you will love to be accompanied by an Aquarius partner."
                }
            ],
            image: "~/images/zodiac/zodiac_03.png"
        },
        {
            id: 12,
            name: "Pisces",
            facts: [
                {
                    fact1:
                        "They might forget what they wore yesterday but will never forget what you     did with them ages ago."
                },
                {
                    fact2:
                        "You will find them funny, believe it, that is their secret weapon."
                },
                {
                    fact3:
                        "They don’t have the time or even bother to argue with you, they prefer being silent and let you think what you wish to."
                },
                {
                    fact4:
                        "They will stand by your side for lifetime if you are able to win their     trust and friendship."
                },
                {
                    fact5:
                        "They are good at judging people and with time, can make out your weakness."
                }
            ],
            image: "~/images/zodiac/zodiac_05.png"
        }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
